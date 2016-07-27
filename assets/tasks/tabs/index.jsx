const tabs = [
  {
    title: 'Tab title',
    content: 'Tab content',
    id: 'tab-id1'
 },
   {
    title: 'Tab title2',
    content: 'Tab content',
    id: 'tab-id2'
 },
   {
    title: 'Tab title3',
    content: 'Tab content',
    id: 'tab-id3'
 },
];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'tab-id1'
    };

    this.onSelectChanged = this.onSelectChanged.bind(this);
  }

  onSelectChanged(value) {
    this.setState({ selectedTab: value });
  }

  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI tabs</h1>
        <Tabs tabs={tabs} selectedTab={this.state.selectedTab}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
