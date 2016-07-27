class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isShown: props.isShown
    };
  }

  render() {
    let modalClasses = "ui modal";

    if (this.state.isShown === true) {
      modalClasses += " active"
    }

    return (
      <div className={modalClasses}>
        <div className="header">Header</div>
        <div className="content">
          {this.props.children}
        </div>
        <div className="actions">
          <div className="ui approve button">Approve</div>
          <div className="ui button">Neutral</div>
          <div className="ui cancel button">Cancel</div>
        </div>
      </div>
    );
  }

};

Modal.props = {
  isShown: React.PropTypes.bool.isRequired
};

window.Modal = Modal;