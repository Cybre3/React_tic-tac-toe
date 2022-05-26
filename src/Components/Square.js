import React from "react";
import "../Game.css";

function Square(props) {
  return (
    <button className={props.value === "O" ? "square-o" : "square"} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           this.props.onClick();
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

export default Square;
