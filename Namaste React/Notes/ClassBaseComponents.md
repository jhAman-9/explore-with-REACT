# Class Base Components

- Class Base Components Structure

                import React from "react";
        class UserClass extends React.Component {
        constructor(props) {
            super(props);
            console.log(props);

            this.state = {
            count: 100,
            FullName : "Aman Kumar Jha"
            };
        }

        render() {
            const { location, name } = this.props;

            const { FullName, count } = this.state;

            return (
            <div className="p-5 border-black-4">
                <h1>Count :{this.state.count}</h1>
                <h2>Name : {FullName}</h2>
                <h2>FullName : {this.props.FullName}</h2>
                <h2>Class : BCA</h2>
                <h3>Roll : 12</h3>
                <h4>Location : {location}</h4>
            </div>
            );
        }
        }

- State In Class Base Components

  - State decleared under the constructor

          - constructor(props) {
          super(props);
          console.log(props);

          this.state = {
          count: 100,
          FullName : "Aman Kumar Jha"
          };

    }

  - How We Set the Value of State Variables..

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

# Life Cycle of Class Base Components

- when the parent components see the classbase components when it render the constructor first, then the render method of class base components

- componentdidmount will work after render process 


- work flow

       - 1st parent constructor, 2nd  parent render method, 3rd child constructor, 4th child render method, 5th child componentdidmount, 6th parent componentdidmount


# What Componnent Did Mount Work:-
- ComponentsDidMount will use to do api call and fill the render Elements because
react work flow is as that it firstly render the element and then do api calls, so components did mount use to fill the render eleemnts..





# Note
- react render the components then do api calls