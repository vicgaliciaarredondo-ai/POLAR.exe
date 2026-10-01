import './App.css';
import Card from './Components/Card/Card.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contenedor-tarjetas">
        
      <Card 
          titulo="Estudiantes"
          valor="85%"
          descripcion="85 de 100 estudiantes "
        />
        <Card 
          titulo="Aprobación"
          valor="192%"
          descripcion="Estudiantes Aprobados"
        />
         <Card 
          titulo="Aprobación"
          valor="192%"
          descripcion="Estudiantes Aprobados"
        />
         <Card 
          titulo="Aprobación"
          valor="192%"
          descripcion="Estudiantes Aprobados"
        />
        </div>
      </header>
    </div>
  );
}

export default App;