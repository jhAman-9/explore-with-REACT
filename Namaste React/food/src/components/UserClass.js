import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("Child Constructor UserClass");

    this.state = {
      count: 100,
      FullName : "Aman Kumar Jha"
    };
  }

  componentDidMount() {
    console.log("Child components did mount UserClass");
  }
  render() {
    const { location, name } = this.props;

    const { FullName, count } = this.state;

    console.log("Child Render Method UserClass");
    return (
      <div className="p-5 border-black-4">


        <div className="flex gap-2">
          <h1>Count :{this.state.count}</h1>
          <button
            className="border-2 border-blue-700 bg-pink-400 text-gray-700"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
                FullName: this.state.FullName + " Purushottampur",
              });
            }}
          >
            Increase Count
          </button>
        </div>



        <h2>Name : {FullName}</h2>
        <h2>FullName : {this.props.FullName}</h2>
        <h2>Class : BCA</h2>
        <h3>Roll : 12</h3>
        <h4>Location : {location}</h4>
      </div>
    );
  }
}

export default UserClass;
  