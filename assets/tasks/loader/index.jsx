function App() {
  return (
    <Loader isShown={false} loadingText="Loading" />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);