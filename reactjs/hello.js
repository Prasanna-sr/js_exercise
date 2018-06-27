import ReactDOM from 'react-dom';
import React from 'react';


// 1 React elements

const name = 'John';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById('root'));


// 2 React Components
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
//
//
// ReactDOM.render(
//   <Welcome name='Prasanna' />,
//   document.getElementById('root')
// );
