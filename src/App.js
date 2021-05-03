import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center display-4">Administrador de Pacientes</h1>
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Formulario />
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
