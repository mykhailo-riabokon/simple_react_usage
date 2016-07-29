class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tabs';

        this.state = {
            selectedTab: this.props.selectedTab
        };

        this.onTabClick = this.onTabClick.bind(this);

    }

    onTabClick(args) {
        this.setState({ selectedTab: args.selectedTab });
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                {this.props.tabs.map((tab, index) => {
                    return <TabHeader key={index} onTabClick={this.onTabClick} title={tab.title} id={tab.id} selectedTab={this.state.selectedTab}/>
                })}
                </div>
                {this.props.tabs.map((tab, index) => {
                    return <Tab tab={tab} selectedTab={this.state.selectedTab} key={index} id={tab.id}/>
                })}
            </div>
            );
    }
}

window.Tabs = Tabs;
