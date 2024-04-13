import logo from "./logo.svg";
import "./App.css";
import EmailForm from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Enter your credentials</p>
        <EmailForm />
      </header>
    </div>
  );
}

export default App;
