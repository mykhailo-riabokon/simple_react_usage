class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShown: props.isShown
        }
    }


    render() {
        var modalClass = this.state.isShown
            ? 'ui modal active'
            : 'ui modal'

        return (
            <div className={modalClass}>
                <div className="header">Header</div>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="actions">
                    <div className="ui approve button">Such a </div>
                    <div className="ui button">big</div>
                    <div className="ui cancel button">deal</div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isShown: React.PropTypes.bool.isRequired
};

window.Modal = Modal;