import React, { useEffect, useState } from 'react';

export const Paciente = (childs) => {

    const { tituloPacientes, setTituloPacientes, paciente, setPaciente, hayPaciente, setHayPaciente, setBtnAddPaciente} = childs;
    const {setMascota, setPropietario, setEmail, setAlta, setSintoma} = childs;

    const eliminarPaciente = (pacienteId) => {
        const eliminar = paciente.filter( ({id}) =>  id !== pacienteId);
        setPaciente(eliminar);
    }

    const editarPaciente = (pacienteId) => {
        const pacienteEditar = paciente.filter( ({id}) => id === pacienteId);
        const {mascota, propietario, email, alta, sintoma, id} = pacienteEditar[0];

        setMascota(mascota);
        setPropietario(propietario);
        setEmail(email);
        setAlta(alta);
        setSintoma(sintoma);
        setBtnAddPaciente('Actualizar Paciente');
    }

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setTituloPacientes(`Pacientes actuales: ${paciente.length}`);
            setHayPaciente('Tus pacientes');
        }else if(Object.keys(paciente).length === 0){
            setTituloPacientes('No hay Pacientes');
            setHayPaciente('Comienza agregando pacientes y');
        }
    }, [paciente]);

    return (
        <section className='section-pacientes'>

            <div className='text-center pb-12 pt-10'>
                <h2 className="title capitalize text-5xl mb-7">{tituloPacientes}</h2>
                <p className='texto text-4xl'>{hayPaciente}
                    <span className='text-indigo-700 font-bold'> aparecerán aquí</span></p>
            </div>

            <article className='grid gap-3'>
                {paciente.map(({ mascota, propietario, email, alta, sintoma, id })=>{
                    return (
                        <div key={id} className='grid gap-3 p-12 bg-white rounded-3xl shadow-xl'>
                            <p className='subtitle uppercase text-3xl'>nombre del paciente : <span className='texto capitalize'>{mascota}</span></p>
                            <p className='subtitle uppercase text-3xl'>nombre del propietario : <span className='texto capitalize'>{propietario}</span></p>
                            <p className='subtitle uppercase text-3xl'>correo de contacto : <span className='texto lowercase'>{email}</span></p>
                            <p className='subtitle uppercase text-3xl'>fecha dada de alta : <span className='texto capitalize'>{alta}</span></p>
                            <p className='subtitle uppercase text-3xl'>sintomas : <span className='texto capitalize'>{sintoma}</span></p>

                            <div className="paciente-btns mt-8 flex justify-between">

                                <button className='py-4 px-8 bg-red-700 hover:bg-red-800 text-white capitalize rounded-lg btn'
                                onClick={() => eliminarPaciente(id)}
                                >eliminar
                                </button>

                                <button className='py-4 px-8 bg-blue-700 hover:bg-blue-800 text-white capitalize rounded-lg btn'
                                onClick={() => editarPaciente(id)}
                                >editar</button>
                            </div>
                        </div>
                    )
                })}
            </article>

        </section>
    )
}
