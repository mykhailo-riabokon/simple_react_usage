/**
 * Created by rkonon on 2016-07-25.
 */
function TabContent(props) {
    return (
        <div
            className={`ui bottom attached tab segment ${props.tabIndex === props.activeTab ? 'active' : ''}`}>
            {props.children}
        </div>
    );
}

TabContent.propTypes = {
    tabIndex: React.PropTypes.number.isRequired,
    activeTab: React.PropTypes.number.isRequired
};

window.TabContent = TabContent;