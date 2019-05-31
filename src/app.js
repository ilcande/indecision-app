class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = "Learning React"
    const options = ['thing one', 'thing two', 'thing four']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log('clicked!');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options);
    console.log('removed!');
  }
  render() {
    return (
      <div>
        <h4>
          Number of options: {this.props.options.length}
        </h4>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      console.log(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
