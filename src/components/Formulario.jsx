import React, {useRef, useState} from 'react';

import BotonCancelarForm from "./BotonCancelarForm";
import { RegexCorreo } from "../helpers";

import { v4 as uuidv4 } from 'uuid';

export const Formulario = (childs) => {

    const formRef = useRef(null);
    const clear = () => {

        setAlerta('');
        setMascota('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintoma('');

        formRef.current.reset()
    };

    const [alerta, setAlerta] = useState('');
    const { 
        setPaciente, paciente,
        mascota, setMascota, 
        propietario, setPropietario, 
        email, setEmail,
        alta, setAlta,
        sintoma, setSintoma,
        pacienteEditar,
        btnAddPaciente, setBtnAddPaciente
    } = childs;

    const crearEditarPaciente = e => {
        e.preventDefault();
        
        if([mascota, propietario, email, alta, sintoma].includes('')){
            return setAlerta('porfavor llena todos los campos')
        }else if(!email.match(RegexCorreo)){
            return setAlerta('Correo Invalido');
        }

        if(btnAddPaciente === 'Actualizar Paciente'){

            pacienteEditar.mascota = mascota;
            pacienteEditar.propietario = propietario;
            pacienteEditar.email = email;
            pacienteEditar.alta = alta;
            pacienteEditar.sintoma = sintoma;

            const listadoPacientesActualizado = paciente.map( (eachPaciente) => eachPaciente.id === pacienteEditar.id 
            ? pacienteEditar
            : eachPaciente
            );

            setPaciente(listadoPacientesActualizado);
            setBtnAddPaciente('agregar paciente')
        }else{

            const nuevoPaciente = {
                mascota,
                propietario,
                email,
                alta,
                sintoma,
                id : uuidv4()
            }
    
            setPaciente( paciente => [nuevoPaciente, ...paciente]);
        }

        clear();
    }

  return (
    <section className='flex flex-col'>

    <header className='text-center pb-12 pt-10'>
        <h2 className="title capitalize text-5xl mb-7">seguimiento pacientes</h2>
        <p className='texto text-4xl'>Añade pacientes y <span className='text-indigo-700 font-bold'>administralos</span></p>
    </header>

    <form className='form bg-white grid gap-4 shadow-lg rounded-lg' onSubmit={crearEditarPaciente} ref={formRef}>

        <p className='text-center mb-3 text-red-500 font-bold text-3xl capitalize'>{alerta}</p>

        <label htmlFor="mascota" className='subtitle uppercase text-3xl'>nombre mascota:</label>
        <input type="text" 
        placeholder='nombre de la mascota:' 
        id='mascota' 
        value={mascota}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={ e => setMascota(e.target.value)}
        />

        <label htmlFor="propietario" className='subtitle uppercase text-3xl'>nombre propietario:</label>
        <input type="text" 
        placeholder='nombre del propietario:' 
        id='propietario'
        value={propietario}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={ e => setPropietario(e.target.value)}
        />

        <label htmlFor="email" className='subtitle uppercase text-3xl'>Email:</label>
        <input type="text" 
        placeholder='Email de contacto:'
        id='email'
        value={email}
        className='text-3xl rounded-lg p-3 input'
        onChange={ e => setEmail(e.target.value)}
        />

        <label htmlFor="alta" className='subtitle uppercase text-3xl'>alta:</label>
        <input type="date" 
        id='alta'
        value={alta}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={ e => setAlta(e.target.value)}
        />

        <label htmlFor="sintoma" className='subtitle uppercase text-3xl'>síntomas:</label>
        <textarea 
        placeholder='sintomas del paciente:'
        spellCheck='true'
        lang='es'
        id='sintoma'
        value={sintoma}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={ e => setSintoma(e.target.value)}
        >
        </textarea>

        <input type="submit" className='p-6 bg-indigo-700 hover:bg-indigo-800 rounded-sm text-white capitalize texto btn'
            value={btnAddPaciente}
        />
        {
            btnAddPaciente === 'Actualizar Paciente' 
            ? <BotonCancelarForm text="cancelar" 
                clear={clear} setBtnAddPaciente={setBtnAddPaciente}/>
            : null
        }
    </form>
    </section>

  )
}