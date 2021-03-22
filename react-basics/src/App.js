import './App.css';
import SayMyName from './Components/SayMyName';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <SayMyName name="Imran" age="23" university="BRAC University" />


      </header>
    </div>
  );
}

function myComponent() {
  return <>
    <h1>This is a header 1 </h1>
    <p>This is a paragraph</p>

  </>
}

export default App;
