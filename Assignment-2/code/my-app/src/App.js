// import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { employee } = props;
  const { name, location, bloodGroup, age, profileImg } = employee;

  return (
    <div className="container">
      <img src={profileImg} alt="profileImg" />

      <div className="items">
        <div>
          <h1>{name}</h1>
        </div>

        <div>
          <p>Location</p>
          <h3>{location}</h3>
        </div>

        <div>
          <p>Blood group</p>
          <h3>{bloodGroup}</h3>
        </div>

        <div>
          <p>Age</p>
          <h3>{age}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
