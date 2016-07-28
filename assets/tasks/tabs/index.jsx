const tabs = [
  {
    title: 'Tab title',
    content: 'Tab content1',
    id: 'tab-id1'
  },
  {
    title: 'Tab title2',
    content: 'Tab content2',
    id: 'tab-id2'
  },
  {
    title: 'Tab title3',
    content: 'Tab content3',
    id: 'tab-id3'
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI tabs</h1>
        <Tabs tabs={tabs} selectedTab="tab-id2"/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
