function Header() {
  return (
    <div className="header flex justify-between	border border-black">
      <div className="logoContainer p-2 m-2">
        <img
          className="logo w-10"
          src="https://play-lh.googleusercontent.com/h_l3BK710iqr1mH8WY0yEtIJmyPGAKV4upFt4n--NxZO-fJ8wwZxV3ZoSQRn5z1a_Q=w240-h480-rw"
          alt=""
        />
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