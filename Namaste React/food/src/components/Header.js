import { LOGO_URL } from "../utils/constants";
function Header() {
  return (
    <div className="header flex justify-between	border border-black">
      <div className="logoContainer p-2 m-2">
        <img className="logo w-10" src={LOGO_URL} alt="" />
      </div>

      <div>
        <ul className="flex gap-5 pe-10 text-md	font-medium">
          <li className="p-2 m-2">Home</li>
          <li className="p-2 m-2">About us</li>
          <li className="p-2 m-2">Contact us</li>
          <li className="p-2 m-2">cart</li>
        </ul>
      </div>
    </div>
  );
}


export default Header
