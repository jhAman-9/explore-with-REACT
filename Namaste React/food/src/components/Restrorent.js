function Restrorent(props) {
    
const stylecard = {
  background: "#f0f0f0",
};

    
  return (
    <div
      className="res-card w-52 h-72  border-black p-1 hover:border hover:cursor-pointer"
      style={stylecard}
    >
      <img alt="res-logo" src={props.img} className="w-full h-32" />
      <div className="text-lg">
        <h3 className="text-lg">{props.restroName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
}

export default Restrorent