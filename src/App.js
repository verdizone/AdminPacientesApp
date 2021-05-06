import { useState, useEffect } from "react";
import { Citas } from "./components/Citas";
import Formulario from "./components/Formulario";

function App() {

  //Citas en local Storage
  let citasIniciales = JSON.parse( localStorage.getItem('citas') );

  if(!citasIniciales){
    citasIniciales = [];
  }


  const [citas, setCitas] = useState(citasIniciales);
  
  //State para realizar operaciones cuando el state cambia
  useEffect( ()=>{
    
    let citasIniciales = JSON.parse( localStorage.getItem('citas') );

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify( [] ));
    }
  }, [citas] );

  //Funcion que tome las citas actuales y  agregue una nueva

  const crearCita = (cita) =>{
    setCitas([
      ...citas,
      cita
    ])
  }

  //Funcion que elimina una cita por su id

  const eliminarCita = (id) =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);

  }

  //Mensaje condicional

  // console.log(citas.length);

  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas';

  // console.log(titulo);


  
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center display-4">Administrador de Pacientes</h1>
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Formulario 
              crearCita= {crearCita}
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-center display-6">{titulo}</h1>

            {
              citas.map( cita =>(

                <Citas
                  key={cita.id} 
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
                
              ))
            }

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
