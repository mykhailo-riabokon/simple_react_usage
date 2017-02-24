class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShown: props.isShown,
        }
    }
    render() {
        var loaderClass = this.state.isShown ? 'ui active dimmer' : 'ui dimmer'

        return (
            <div className="ui segment" style={{paddingTop: 300}}>
                <div className={loaderClass}>
                    <div className="ui text loader">{this.props.loadingText}</div>
                </div>
                <p></p>
            </div>
        );
    }
}

Loader.propTypes = {
    isShown: React.PropTypes.bool.isRequired,
    loadingText: React.PropTypes.string
};

window.Loader = Loader;
