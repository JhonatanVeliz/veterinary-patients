import React, {useState} from 'react'

import { Formulario } from "./Formulario.jsx";
import { Paciente } from "./Paciente.jsx";

export const Grid = () => {

    const [paciente, setPaciente] = useState([]);
    const [btnAddPaciente, setBtnAddPaciente] = useState('agregar paciente');
    const [hayPaciente, setHayPaciente] = useState('');

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintoma, setSintoma] = useState('');
    const [tituloPacientes, setTituloPacientes] = useState('');

  return (
    <div className='flex justify-between gap-8'>

        <Formulario 
        setPaciente={setPaciente}
        mascota={mascota} setMascota={setMascota}
        propietario={propietario} setPropietario={setPropietario}
        email={email} setEmail={setEmail}
        alta={alta} setAlta={setAlta}
        sintoma={sintoma} setSintoma={setSintoma}
        btnAddPaciente={btnAddPaciente}
        setBtnAddPaciente={setBtnAddPaciente}
        />

        <Paciente tituloPacientes={tituloPacientes} 
        setTituloPacientes={setTituloPacientes} 
        paciente={paciente} 
        setPaciente={setPaciente}
        hayPaciente={hayPaciente}
        setHayPaciente={setHayPaciente}

        setMascota={setMascota}
        setPropietario={setPropietario}
        setEmail={setEmail}
        setAlta={setAlta}
        setSintoma={setSintoma}
        setBtnAddPaciente={setBtnAddPaciente}
        />

    </div>
  )
}
