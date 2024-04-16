import { useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const id = 10;

    const navigate = useNavigate()

    const location = useLocation();

    function goToAbout() {
        navigate("/about", {state : {id : id}})
    }

    return (
      <>
        <section>
          <div>Home Page {location.state.id}</div>
          <button onClick={goToAbout}>About </button>
        </section>
      </>
    );
}

export default Home
