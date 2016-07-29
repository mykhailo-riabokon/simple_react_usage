class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Loader';
        this._renderContext = this._renderContext.bind(this);
    }

    _renderContext(){
        let defaultClass = 'ui inverted dimmer ';
        let activeClass = (this.props.isShown) ? defaultClass+ 'active' : defaultClass

        return ((<div>
                  <div className={activeClass}>
                    <div className="ui text loader">{this.props.loadingText}</div>
                  </div>
                </div>))

    }
    render() {
        return (this._renderContext());
    }
}

window.Loader = Loader;
