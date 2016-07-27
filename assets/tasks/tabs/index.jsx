const tabs = [
  {
    id: 1,
    title: 'The First Tab',
    content: 'The First Tab content'
  },
  {
    id: 2,
    title: 'The Second Tab',
    content: 'The Second Tab content'
  },
  {
    id: 3,
    title: 'The Third Tab',
    content: 'The Third Tab content'
  }
];

const activeTabId = 2;


function App() {
  return (
    <Tabs tabs={tabs} activeTabId={activeTabId} />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);