class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleRemoveOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  };
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count -= 1;
//   renderCounterApp();
// };
// const resetCounter = () => {
//   count = 0;
//   renderCounterApp();
// };


// const renderCounterApp = () => {
//   const templateThree = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetCounter}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateThree, appRoot);
// };

// renderCounterApp();
