class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : this.props.isShown
    }
  }

  isLoading(){
    return('ui dimmer ' + (this.state.isLoading ? 'active' : ''));
  }

  switchLoading(){
    this.setState({
      isLoading : !this.state.isLoading
    });
  }

  render() {
    var styles = {
      height: "100"
    };
    
    return (
      <div className="ui segment">
        <div className={this.isLoading()}>
          <div className="ui text loader">{this.props.loadingText}</div>
        </div>
        <p style={styles}>
        </p>
      </div>
    );
  }
}

// Loader.propTypes = {
//   isShown: React.PropTypes.boolean.isRequired,
//   loadingText: React.PropTypes.string.isRequired,
// };

// Do not use it in real applications. Use ES6 modules instead.
window.Loader = Loader;
