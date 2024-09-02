import stg_logo from "../logos/ΜΣΣ logo 2 (EL).png";
import "../App.css";

const Home = () => {
  return (
    <header className="App-header">
      <a className="navbar-item" href="https://www.uom.gr">
            <img
              src="https://www.uom.gr/site/images/logos/UOMLOGOGR-thumb.png"
              alt="uom-logo"
              height="400"
            />
          </a>
      <p className="description">
        Digital Policy Managment and Monitoring System, this will help educational policy makers
        that want to manage KPIs or specific metrics.  
      </p>
    </header>
  );
};

export default Home;
