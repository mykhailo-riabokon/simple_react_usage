

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI modal</h1>
        <button className="ui primary button" onClick={(() => this.refs.modal.open()).bind(this)}>
          Show
        </button>
        <Modal ref="modal" isShown={false}>
          <i className="close icon" onClick={(() => this.refs.modal.close()).bind(this)}></i>
          <div className="header">
            Profile Picture
          </div>
          <div className="image content">
            <div className="ui medium image">
              <img src="http://semantic-ui.com/images/avatar2/large/rachel.png"/>
            </div>
            <div className="description">
              <div className="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div className="actions">
            <div className="ui black deny button" onClick={(() => this.refs.modal.close()).bind(this)}>
              Nope
            </div>
            <div className="ui positive right labeled icon button" onClick={(() => this.refs.modal.close()).bind(this)}>
              Yep, that's me
              <i className="checkmark icon"></i>
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
