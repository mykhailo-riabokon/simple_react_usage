class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({ showModal: !this.state.isShown });
  }

  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI modal</h1>
        <button onClick={this.showModal}>Show modal</button>
        <Modal isShown={this.state.isShown}>
          <h1>Some modal content</h1>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
