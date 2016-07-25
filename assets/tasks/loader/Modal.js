/**
 * Created by rkonon on 2016-07-25.
 */
function Loader(props) {
    const loaderStyles = {
        'display': props.isShown ? 'block' : 'none',
        'minHeight': '100px'
    };

    return (
        <div className="ui segment" style={loaderStyles}>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.loadingText}</div>
            </div>
            <p></p>
        </div>
    );
}

Loader.propTypes = {
    isShown: React.PropTypes.bool,
    loadingText: React.PropTypes.string
};

Loader.defaultProps = {
    isShown: true,
    loadingText: 'Loading...'
};

window.Loader = Loader;