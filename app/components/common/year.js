'use client'
import React from 'react'

function Year() {
  const anio = new Date().getFullYear();
    
  return (
    <p> Made with love by Sara García Campor {anio}</p>
  )
}

export default Year