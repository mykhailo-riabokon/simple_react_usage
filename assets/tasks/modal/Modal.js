/**
 * Created by rkonon on 2016-07-25.
 */
function Modal(props) {
    const modalStyles = {
        'display': props.isShown ? 'block' : 'none'
    };

    return (
        <div className="ui modal" style={modalStyles}>
            <i className="close icon"></i>
            <div className="header">
                Basic Modal
            </div>
            <div className="image content">
                <div className="image">
                    <i className="archive icon"></i>
                </div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="actions">
                <div className="two fluid ui buttons">
                    <div className="ui cancel red basic button">
                        <i className="remove icon"></i>
                        No
                    </div>
                    <div className="ui ok green basic button">
                        <i className="checkmark icon"></i>
                        Yes
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isShown: React.PropTypes.bool
};

Modal.defaultProps = {
    isShown: true
};

window.Modal = Modal;