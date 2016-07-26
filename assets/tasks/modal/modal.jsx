class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal().bind(this);
  }

  showModal(){
    let result;
    if(this.props.isShown){
      result = <div className="ui basic active modal">
                  {this.props.children}
                </div>
    }else{
      result = <div className="ui basic modal">
                {this.props.children}
              </div>
    }
    return result;
  }

  render() {
    return (<div>{this.showModal()}</div>);
  }
}

// Do not use it in real applications. Use ES6 modules instead.
window.Modal = Modal;
