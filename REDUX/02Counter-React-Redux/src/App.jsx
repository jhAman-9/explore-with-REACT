import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Countainer from "./components/Countainer";
import Control from "./components/Control";
import { useSelector } from "react-redux";
import PrivacyMess from "./components/PrivacyMess";

function App() {

  const privacy = useSelector(store => store.privacy)
  return (
      <center className="px-4 py-5 my-5 text-center">
        <Countainer>
          <Header/>
          <div className="col-lg-6 mx-auto">
            {privacy==true ? <PrivacyMess/> : <DisplayCounter/>}
            <Control/>
          </div>
        </Countainer>
      </center>
  );
}

export default App;
