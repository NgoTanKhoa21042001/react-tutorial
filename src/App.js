import logo from "./logo.svg";
import "./App.css";
import "./components/Loading/Loading";
import Loading from "./components/Loading/Loading";
function App() {
  const name = "Hau";
  const age = 12;
  const isFemale = true;
  const students = {
    name: "Easy Frontend",
  };

  const colorList = ["yellow", "green", "blue", "purple"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          {name} - {age}
        </p>
        {isFemale ? <p>Male</p> : <p>Female </p>}

        {isFemale && (
          <>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </>
        )}

        {colorList.map((color) => (
          <li style={{ color }}>{color}</li>
        ))}
        <Loading />
      </header>
    </div>
  );
}

export default App;
