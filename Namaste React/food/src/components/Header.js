import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
function Header() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between	border border-black">
      <div className="logoContainer p-2 m-2">
        <img className="logo w-10" src={LOGO_URL} alt="" />
      </div>

      <div>
        <ul className="flex gap-5 pe-10 text-md	font-medium">
          <li className="p-2 m-2">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
