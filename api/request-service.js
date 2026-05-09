import { createClient } from '@supabase/supabase-js'

const requiredFields = ['nombre', 'email', 'mensaje']

const allowedOrigins = [
  process.env.SITE_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
].filter(Boolean)

function setCorsHeaders(req, res) {
  const origin = req.headers.origin
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || '*'

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function normalizeValue(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req, res) {
  setCorsHeaders(req, res)

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Metodo no permitido. Usa POST.' })
  }

  try {
    const body = req.body || {}

    // Honeypot: this hidden field should stay empty for real users.
    if (normalizeValue(body.website)) {
      return res.status(400).json({ ok: false, message: 'Solicitud no valida.' })
    }

    const serviceRequest = {
      empresa: normalizeValue(body.empresa),
      nombre: normalizeValue(body.nombre),
      telefono: normalizeValue(body.telefono),
      email: normalizeValue(body.email).toLowerCase(),
      direccion: normalizeValue(body.direccion),
      ciudad: normalizeValue(body.ciudad),
      tipo_propiedad: normalizeValue(body.tipo_propiedad),
      tipo_servicio: normalizeValue(body.tipo_servicio),
      urgencia: normalizeValue(body.urgencia),
      mensaje: normalizeValue(body.mensaje),
    }

    const missingFields = requiredFields.filter((field) => !serviceRequest[field])

    if (missingFields.length > 0) {
      return res.status(400).json({
        ok: false,
        message: 'Faltan campos obligatorios.',
        fields: missingFields,
      })
    }

    if (!isValidEmail(serviceRequest.email)) {
      return res.status(400).json({
        ok: false,
        message: 'El email no tiene un formato valido.',
      })
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return res.status(500).json({
        ok: false,
        message: 'Faltan variables de entorno de Supabase.',
      })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    const { data, error } = await supabase
      .from('service_requests')
      .insert(serviceRequest)
      .select('id')
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({
        ok: false,
        message: 'No se pudo guardar la solicitud.',
      })
    }

    return res.status(200).json({
      ok: true,
      id: data.id,
      message: 'Solicitud enviada correctamente. Revisaremos tu solicitud en 24/48h.',
    })
  } catch (error) {
    console.error('Request service API error:', error)
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor.',
    })
  }
}
