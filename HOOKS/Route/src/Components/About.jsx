import { useLocation, useNavigate } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location.state);

  const navigate = useNavigate();

  function goToHome() {
    navigate("/", { state: { id: "Aman Kumar Jha" } });
  }

  return (
    <div>
      <div>Hey, I am About {location.state.id}</div>
      <section>
        <button onClick={goToHome}>goToHome {location.state.id}</button>
      </section>
    </div>
  );
}

export default About;
