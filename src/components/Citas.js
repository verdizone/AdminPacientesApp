import React from 'react'
import PropTypes from 'prop-types'

export const Citas = ( {cita, eliminarCita} ) => {

    const {mascota, fecha, hora, propietario, info} = cita;

    return (

        <>

           <div className="form-control">
                <p>Mascota: <span>{mascota}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
                <p>Dueño: <span>{propietario}</span></p>
                <p>Síntomas: <span>{info}</span></p>
                <button 
                    onClick={()=>eliminarCita(cita.id)}
                    className="btn btn-outline-danger w-100"
                >
                    Eliminar &times;
                </button>
            </div>
        
        </>
    )
}

Citas.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}
