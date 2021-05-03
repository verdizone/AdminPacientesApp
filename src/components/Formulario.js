import React, { useState } from 'react'
import Error from './Error';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const [error, setError] = useState(false);

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        info: '',

    });

    const {mascota, propietario, fecha, hora, info} = cita;

    const handleAdd = (e) => {
        e.preventDefault();
        //Validar form
        if(mascota.length <= 0 || 
            propietario.length <= 0 || 
            fecha.length <= 0 || 
            hora.length <= 0 || 
            info.length <= 0 ){
            setError(true);
            return;
        }
        setError(false);

        //Agregar un id
        cita.id = uuidv4();

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        setCita({
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          info: '',
        });


    }

    const actualizarState = (e) => {
        // console.log(e.target.value);
        setCita({
            ...cita,
            [e.target.name]: e.target.value,
        
        })

    }

    return (
        <>
            <h1 className="text-center display-6">Agendar Cita</h1>
            {
                error ? <Error mensaje="No debe haber campos vacíos"/> : null
            }
            <form 
            onSubmit={handleAdd}
              className="form-control"
            >
              <label htmlFor="mascota">
                Mascota
              </label>
              <input
                className="form-control mb-2"
                type="text"
                id="mascota"
                placeholder="Nombre de la mascota"
                name="mascota"
                onChange={actualizarState}
                value={mascota}
                

              />
              <label htmlFor="propietario">
                Dueño
              </label>
              <input
                className="form-control mb-2"
                type="text"
                id="propietario"
                placeholder="Nombre del dueño"
                name="propietario"
                onChange={actualizarState}
                value={propietario}


              />
              <label htmlFor="fecha">
                Fecha
              </label>
              <input
                className="form-control mb-2"
                type="date"
                id="fecha"
                name="fecha"
                onChange={actualizarState}
                value={fecha}


              />
              <label htmlFor="hora">
                Hora
              </label>
              <input
                className="form-control mb-2"
                type="time"
                id="hora"
                name="hora"
                onChange={actualizarState}
                value={hora}


              />
              <label htmlFor="info">
                Información
              </label>
              <textarea
                className="form-control mb-2"
                id="info"
                placeholder="Información importante"
                name="info"
                onChange={actualizarState}
                value={info}
              >
              </textarea>
                <button 
                    type="submit"
                    className="btn btn-outline-primary w-100 mt-2"
                >
                    Agregar Cita
                </button>
            </form>   
        </>
    )
}

export default Formulario
