"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export function FormularioContacto() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const [enviando, setEnviando] = useState(false)
  const [mensajeExito, setMensajeExito] = useState('')
  const [error, setError] = useState('')

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setDatos(prevDatos => ({
      ...prevDatos,
      [name]: value
    }))
  }

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    setError('')
    setMensajeExito('')

    try {
      const respuesta = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      })

      if (!respuesta.ok) {
        throw new Error('Error al enviar el mensaje')
      }

      setMensajeExito('Mensaje enviado correctamente')
      setDatos({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      })
    } catch (error) {
      setError('No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form onSubmit={manejarEnvio} className="space-y-6">
      <div>
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={datos.nombre}
          onChange={manejarCambio}
          required
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={datos.email}
          onChange={manejarCambio}
          required
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={datos.telefono}
          onChange={manejarCambio}
          required
          className="w-full"
        />
      </div>

      <div>
        <Textarea
          name="mensaje"
          placeholder="¿En qué podemos ayudarte?"
          value={datos.mensaje}
          onChange={manejarCambio}
          required
          className="w-full h-32"
        />
      </div>

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}

      {mensajeExito && (
        <p className="text-green-600 text-sm">{mensajeExito}</p>
      )}

      <Button
        type="submit"
        disabled={enviando}
        className="w-full"
      >
        {enviando ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </form>
  )
}
