# reactToDoListSimple
React

Npm init
Npm install react --save
npm install react-dom --save
npm install webpack --save
npm install babel-core --save
npm install babel-loader --save
npm install babel-present-es2015 --save
npm install babel-preset-react --save

things to note:
babel - transcribes ES to javascript for browser to read
webpack - builder

React Import

import { itemShape } from '../../constants/types';

Know
state is read only (cant modify state, create new state always)
concept like Flux is related like MVC (different)
Redux is implementation of Flux
Concept of store -> view -> Action Creator -> Dispatcher || users reducers
Performance (due to less update on DOM)

Pure Function
In computer programming, a function may be considered a pure function if both of the following statements about the function hold:

The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices (usually—see below).
Evaluation of the result does not cause any semantically observable side effector output, such as mutation of mutable objects or output to I/O devices (usually—see below).
The result value need not depend on all (or any) of the argument values. However, it must depend on nothing other than the argument values. The function may return multiple result values and these conditions must apply to all returned values for the function to be considered pure. If an argument is passed by reference, any parameter mutation will alter the value of the argument outside the function, which will render the function impure.

Flux


React Components
Container Component: This type of component complements presentation component by providing states. It's always the guy at the top of the family tree, making sure that data is coordinated.

You do not necessarily need a state management tool outside of what React provides if what you are building does not have too much nested children and less complex. A To-Do is is simple so we can do with what React offers for now provided we understand how and when to use a presentation or container component

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
This code is for container components that require knowledge of state related information

Presentational components: These are contained components that are responsible for UI. They are composed with JSX and rendered using the render method. The key rule about this type of component is that they are stateless meaning that no state of any sort is needed in such components. Data is kept in sync using props.
If all that a presentation component does is render HTML based on props, then you can use stateless function to define the component rather than classes.

const Title = () => (
  <div>
     <div>
        <h1>to-do</h1>
     </div>
  </div>
);

If there is nothing being passed (parameters) really simplified one

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick(remove(todo.id))>{todo.text}</li>);
}

For when have stuff going into components
can be objects or functions

React Commands
https://reactjs.org/docs/react-component.html

React Component Lifecycle

Lodash

utility library delivering modularity, performance and extras
basically helper stuff for array, math, etc.

Testing Frameworks
