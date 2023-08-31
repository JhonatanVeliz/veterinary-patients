import React, { useEffect } from 'react';

export const Paciente = (childs) => {

    const { 
        tituloPacientes, setTituloPacientes, 
        paciente, setPaciente, hayPaciente, 
        setHayPaciente, setBtnAddPaciente,
        setPacienteEditar,
        setMascota, setPropietario, setEmail, setAlta, setSintoma
    } = childs;

    const eliminarPaciente = (pacienteId) => {
        const eliminar = paciente.filter( ({id}) =>  id !== pacienteId);
        setPaciente(eliminar);
        localStorage.removeItem(pacienteId);
    }

    const editarPaciente = (pacienteId) => {
        const pacienteEditar = paciente.filter( ({id}) => id === pacienteId);
        const {mascota, propietario, email, alta, sintoma} = pacienteEditar[0];

        setMascota(mascota);
        setPropietario(propietario);
        setEmail(email);
        setAlta(alta);
        setSintoma(sintoma);
        setBtnAddPaciente('Actualizar Paciente');

        setPacienteEditar(pacienteEditar[0]);
    }

    useEffect(() => {

        if (Object.keys(paciente).length > 0) {
            setTituloPacientes(`Pacientes actuales: ${paciente.length}`);
            setHayPaciente('Tus pacientes');
            localStorage.setItem(paciente[0].id, JSON.stringify(paciente));
        }
        else{
            setTituloPacientes('No hay Pacientes');
            setHayPaciente('Comienza agregando pacientes y');
        }

    }, [paciente]);

    const getPacientesStorage = () => {
        const dataStorage = Object.values(localStorage);
        try {
            dataStorage.forEach((paciente, index) => {
                const datosPaciente = JSON.parse(paciente);
                if(datosPaciente[index].mascota) return setPaciente(datosPaciente);
            })
        } catch (error) {console.warn('LocalStorage con contenido desconocido')}
    }

    useEffect(() => {
        getPacientesStorage();
    }, []);

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
                        <div key={id} className='grid gap-3 p-12 bg-white rounded-3xl shadow-xl paciente_card'>
                            <p className='subtitle uppercase text-3xl paciente__titulo'>nombre del paciente : <span className='texto capitalize'>{mascota}</span></p>
                            <p className='subtitle uppercase text-3xl paciente__titulo'>nombre del propietario : <span className='texto capitalize'>{propietario}</span></p>
                            <p className='subtitle uppercase text-3xl paciente__titulo'>correo de contacto : <span className='texto lowercase'>{email}</span></p>
                            <p className='subtitle uppercase text-3xl paciente__titulo'>fecha dada de alta : <span className='texto capitalize'>{alta}</span></p>
                            <p className='subtitle uppercase text-3xl paciente__titulo'>sintomas : <span className='texto capitalize'>{sintoma}</span></p>

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
