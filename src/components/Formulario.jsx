import React, {useRef, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Formulario = (childs) => {

    const formRef = useRef(null);

    const [alerta, setAlerta] = useState('');
    const { setPaciente, mascota, setMascota, propietario, setPropietario, email, setEmail, alta, setAlta, sintoma, setSintoma, btnAddPaciente, setBtnAddPaciente } = childs;

    const crearPaciente = (e) => {

        e.preventDefault();
        const RegexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if([mascota, propietario, email, alta, sintoma].includes('')){
            return setAlerta('porfavor llena todos los campos')
        }else if(!email.match(RegexCorreo)){
            return alert('Correo Invalido');
        }

        const nuevoPaciente = {
            mascota,
            propietario,
            email,
            alta,
            sintoma,
            id : uuidv4()
        }

        setPaciente( paciente => [nuevoPaciente, ...paciente]);
        setAlerta('');

        setMascota('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintoma('');

        formRef.current.reset();
    }

  return (
    <section className='flex flex-col'>

    <div className='text-center pb-12 pt-10'>
        <h2 className="title capitalize text-5xl mb-7">seguimiento pacientes</h2>
        <p className='texto text-4xl'>Añade pacietes y <span className='text-indigo-700 font-bold'>administralos</span></p>
    </div>

    <form className='form bg-white grid gap-4 shadow-lg rounded-lg' onSubmit={crearPaciente} ref={formRef}>

        <p className='text-center mb-3 text-red-500 font-bold text-3xl capitalize'>{alerta}</p>

        <label htmlFor="mascota" className='subtitle uppercase text-3xl'>nombre mascota:</label>
        <input type="text" 
        placeholder='nombre de la mascota:' 
        id='mascota' 
        value={mascota}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={(e)=> setMascota(e.target.value)}
        />

        <label htmlFor="propietario" className='subtitle uppercase text-3xl'>nombre propietario:</label>
        <input type="text" 
        placeholder='nombre del propietario:' 
        id='propietario'
        value={propietario}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={(e)=> setPropietario(e.target.value)}
        />

        <label htmlFor="email" className='subtitle uppercase text-3xl'>Email:</label>
        <input type="text" 
        placeholder='Email de contacto:'
        id='email'
        value={email}
        className='text-3xl rounded-lg p-3 input'
        onChange={(e)=> setEmail(e.target.value)}
        />

        <label htmlFor="alta" className='subtitle uppercase text-3xl'>alta:</label>
        <input type="date" 
        id='alta'
        value={alta}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={(e)=> setAlta(e.target.value)}
        />

        <label htmlFor="sintoma" className='subtitle uppercase text-3xl'>sintomas:</label>
        <textarea 
        placeholder='sintomas del paciente:'
        id='sintoma'
        value={sintoma}
        className='text-3xl rounded-lg p-3 capitalize input'
        onChange={(e)=> setSintoma(e.target.value)}
        >
        </textarea>

        <button className='p-6 bg-indigo-700 hover:bg-indigo-800 rounded-sm text-white capitalize texto btn'>{btnAddPaciente}</button>
    </form>
    </section>

  )
}