import React from "react";

class Counter extends React.Component {
    // Setting the initial state of the Counter component
  state = {
    count: 0
  };
    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };
      // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
        // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };
    // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
/*-----------------------------------------------*/
// using class component in diffrent way.
// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count : 0};
 
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }
 
//   handleIncrement(){
//     this.setState((prevState)=>{
//       return {count: prevState.count + 1}
//     });
//   }
//  handleDecrement(){
//    this.setState((prevState)=>{
//     return {count: prevState.count - 1}
//    });
//  }
//   render(){
//     return(
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//        </div>
//        <div className="card-body">
//          <p className="card-text">Click Count: {this.state.count}</p>
//          <button className="btn btn-primary" onClick={this.handleIncrement}>
//            Increment
//          </button>{" "}
//          <button className="btn btn-primary" onClick={this.handleDecrement}>
//            Decrement
//          </button>
//       </div>
//       </div>
     
//     )
//   }
//  }

/** Using Functional component */
// import React, {useState} from "react";
// export default function Time(props){
//     let [count,setCount] = useState(0);
   
//     const handleIncrement = () => {
//       setCount(++count);
//     }
//     const handleDecrement = () => {
//         setCount(--count);
//       }
//     return(
//         <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {count}</p>
//           <button className="btn btn-primary" onClick={handleIncrement}>
//             Increment
//           </button>{" "}
//           <button className="btn btn-danger" onClick={handleDecrement}>
//             Decrement
//           </button>
//         </div>
//       </div>
//     )
//    }
export default Counter;
