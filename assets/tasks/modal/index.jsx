class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    }

    this.onClickChange = this.onClickChange().bind(this);
  }

  onClickChange(){
    this.setState({isShown: !this.state.isShown})
  }

  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI modal</h1>
        <button onClick={this.onClickChange}>Show modal</button>
        <Modal isShown={this.state.isShown}>
            <i className="close icon"></i>
            <div className="header">
              Archive Old Messages
            </div>
            <div className="image content">
              <div className="image">
                <i className="archive icon"></i>
              </div>
              <div className="description">
                <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
              </div>
            </div>
            <div className="actions">
              <div className="two fluid ui inverted buttons">
                <div className="ui cancel red basic inverted button">
                  <i className="remove icon"></i>
                  No
                </div>
                <div className="ui ok green basic inverted button">
                  <i className="checkmark icon"></i>
                  Yes
                </div>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
