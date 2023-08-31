import React from 'react'

const BotonCancelarForm = ({ text, clear, setBtnAddPaciente }) => {
  
  const reiniciar = () => {
    setBtnAddPaciente('agregar paciente');
    clear();
  }

  return (
    <button type='button' 
    className='p-6 bg-red-700 hover:bg-red-800 
               rounded-sm text-white 
               capitalize texto btn'
    onClick={reiniciar}
    >{text}
    </button>
  )
}

export default BotonCancelarForm