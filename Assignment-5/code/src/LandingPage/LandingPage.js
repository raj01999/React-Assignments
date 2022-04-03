import Card from "./Card";
import Navbar from "./Navbar";
import data from "../Mock-data/data.json";

const LandingPage = () => {
  const users = data.user;

  return (
    <div className="site-container">
      <Navbar />
      <div className="container">
        {users.length
          ? users.map((obj, idx) => {
              return <Card key={"raj" + idx} obj={obj} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default LandingPage;
