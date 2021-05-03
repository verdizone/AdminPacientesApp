import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {

  const [citas, setCitas] = useState([]);
  
  //Funcion que tome las citas actuales y  agregue una nueva

  const crearCita = (cita) =>{
    setCitas([
      ...citas,
      cita
    ])
  }
  
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
           OTRO...
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
