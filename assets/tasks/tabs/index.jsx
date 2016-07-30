const tabs = [
  {
    title: 'First title',
    content: 'First content',
    id: 'first'
  },
  {
    title: 'Second title',
    content: 'Second content',
    id: 'second'
  },
  {
    title: 'Third title',
    content: 'Third content',
    id: 'third'
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI tabs</h1>
        <Tabs tabs={tabs} selectedTab="first"/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
