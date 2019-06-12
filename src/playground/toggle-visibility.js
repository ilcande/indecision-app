class VisibilityToggle extends React.Component {
  constructor(props){
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: 'Visibility Toggle',
      visibility: false
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility === false ? 'Show Details' : 'Hide Details'}</button>
        <p>{this.state.visibility === false ? '' : 'Details Here'}</p>
      </div>
    );
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log('Toggle Visibility.js is running');
// let app = {
//   title: 'Visibility Toggle',
//   visibility: false
// }

// const onToggle = () => {

//   app.visibility = !app.visibility;
//   console.log('clicked');
//   renderToggleVisibility();
// };

// const renderToggleVisibility = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onToggle}>{app.visibility === false ? 'Show' : 'Hide'}</button>
//       <p>{app.visibility === false ? '' : 'Details here'}</p>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');
// renderToggleVisibility();
