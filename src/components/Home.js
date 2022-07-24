import hero from "./hero.png";
const Home = () => {
  return (
    <div className="home-content">
      <div className="text">
        <div className="home">
          <div className="hello">Hello, I am</div>
          <div className="name">Idris Qozim</div>
          <div className="topic">
            <ul>
              <li>Professsional Web Developer </li>
              <li>Embedded Systems Engineer </li>
              <li>3D Modeler </li>
              <li>IT Support Specialist </li>
            </ul>
          </div>
          <p>
            <span style={{ fontWeight: "bold" }}>Idris Qozim </span>
            is a professional web developer with proficiency in react who build
            personal and professional webapps for small, medium and large
            organizations, a 3D Modeler with SolidWorks, an IT Support
            specialist, and an Embedded Systems Engineer.
          </p>
        </div>
        <div className="btn">
          <a href="mailto:qozimidris@gmail.com?Subject=I Have a job for you">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
      <div className="img">
        <img src={hero} alt="hero-pics" />
      </div>
    </div>
  );
};

export default Home;
