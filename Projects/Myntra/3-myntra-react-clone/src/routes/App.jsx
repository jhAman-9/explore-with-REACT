import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoaderSpinner from "../components/LoaderSpinner";
import FetchItems from "../components/FetchItems";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoaderSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
