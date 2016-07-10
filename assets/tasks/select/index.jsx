const options = [
  {
    label: 'Male',
    value: '1'
  },
  {
    label: 'Female',
    value: '2'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: ''
    };

    this.onSelectChanged = this.onSelectChanged.bind(this);
  }

  onSelectChanged(value) {
    this.setState({ selectValue: value });
  }

  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI select</h1>
        <Select placeholder="Gender" name="gender" options={options} onChanged={this.onSelectChanged} />
        <h3>New select value is {this.state.selectValue}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
