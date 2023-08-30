// import { Component } from 'react';
// import Counter from './components/ClassCounter';

// interface AppState {
//   showCounter: boolean;
//   displayUpdates: boolean;
// }

// export default class App extends Component<object, AppState> {
//   state = {
//     showCounter: true,
//     displayUpdates: true,
//   };

//   toggleCounter = () => {
//     this.setState({ showCounter: !this.state.showCounter });
//   };

//   toggleDisplayUpdates = () => {
//     this.setState({ displayUpdates: !this.state.displayUpdates });
//   };

//   render() {
//     return (
//       <div className="app">
//         <label>
//           <input
//             type="checkbox"
//             checked={this.state.showCounter}
//             onChange={this.toggleCounter}
//           ></input>
//           Toggle Counter
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={this.state.displayUpdates}
//             onChange={this.toggleDisplayUpdates}
//           ></input>
//           Display Updates
//         </label>
//         {this.state.showCounter && (
//           <Counter displayUpdates={this.state.displayUpdates} />
//         )}
//       </div>
//     );
//   }
// }
import { useState } from 'react';
import FunctionalCounter from './components/FunctionalCounter';
const App = () => {
  const [showCounter, setShowCounter] = useState(true);
  const [displayUpdates, setDisplayUpdates] = useState(true);

  const toggleCounter = () => {
    setShowCounter((prevState) => !prevState);
  };
  const toggleDisplayUpdates = () => {
    setDisplayUpdates((prevState) => !prevState);
  };
  return (
    <div className="app">
      <label>
        <input
          type="checkbox"
          checked={showCounter}
          onChange={toggleCounter}
        ></input>
        Toggle Counter
      </label>
      <label>
        <input
          type="checkbox"
          checked={displayUpdates}
          onChange={toggleDisplayUpdates}
        ></input>
        Display Updates
      </label>
      {showCounter && <FunctionalCounter displayUpdates={displayUpdates} />}
    </div>
  );
};

export default App;
