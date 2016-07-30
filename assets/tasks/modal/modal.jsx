class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown : this.props.isShown
    }
  }

  close(){
    this.setState({
      isShown : false
    });
  }

  open(){
    this.setState({
      isShown : true
    });
  }

  isShown(){
    return 'ui  modal scrolling ' + (this.state.isShown ? 'active' : '');
  }

  render() {
    return (
      <div className={this.isShown()}>
      {this.props.children}
     </div>);
  }
}

// Do not use it in real applications. Use ES6 modules instead.
window.Modal = Modal;
