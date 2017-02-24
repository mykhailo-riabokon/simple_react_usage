const menuItemActive = 'active item';
const menuItemInactive = 'item';
const tabItemActive = "ui bottom attached active tab segment";
const tabItemIncative = "ui bottom attached  tab segment";

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItemIndex: 0
        }

        this.onTabMenuItemClick = this.onTabMenuItemClick.bind(this);
    }

    onTabMenuItemClick(index) {
        this.setState({ selectedItemIndex: index });
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                    {this.props.tabs.map((tab, index) => {
                        return (<a key={index} className={index === this.state.selectedItemIndex
                            ? menuItemActive
                            : menuItemInactive} data-tab={tab.title} onClick={ this.onTabMenuItemClick.bind(this, index) }>{tab.title}</a>)
                    }) }
                </div>
                {this.props.tabs.map((tab, index) => {
                    return <div key={index} className={index === this.state.selectedItemIndex
                        ? tabItemActive
                        : tabItemIncative} data-tab={tab.title}>
                        {tab.content}
                    </div>
                })
                }
            </div>
        )
    }
}

Tabs.propTypes = {
    tabs: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string,
            content: React.PropTypes.string
        })
    )
}

window.Tabs = Tabs;