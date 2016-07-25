/**
 * Created by rkonon on 2016-07-25.
 */
function TabTitle(props) {
    return (
        <a className={`item ${props.tabIndex === props.activeTab ? 'active' : ''}`}
           onClick={props.setActive}>{props.tabTitle}</a>
    );
}

TabTitle.propTypes = {
    tabIndex: React.PropTypes.number.isRequired,
    activeTab: React.PropTypes.number.isRequired,
    setActive: React.PropTypes.func.isRequired
};

window.TabTitle = TabTitle;