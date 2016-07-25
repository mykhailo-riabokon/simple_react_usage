/**
 * Created by rkonon on 2016-07-25.
 */
class Tabs extends React.Component {
    constructor() {
        super();

        this.state = {
            activeTab: 0
        };
    }

    componentDidMount() {
        this.setActiveTab(this.props.selectedTab);
    }
    
    setActiveTab(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        const tabCaptions = this.props.tabs.map((tab) =>
            <TabTitle key={tab.id}
                      tabIndex={tab.id}
                      tabTitle={tab.tabTitle}
                      activeTab={this.state.activeTab}
                      setActive={this.setActiveTab.bind(this, tab.id)}/>);

        const tabContents = this.props.tabs.map((tab) =>
            <TabContent key={tab.id}
                        tabIndex={tab.id}
                        activeTab={this.state.activeTab}>
                {tab.tabContent}
            </TabContent>);

        return (
            <div>
                <div className="ui top attached tabular menu">
                    {tabCaptions}
                </div>

                {tabContents}
            </div>
        );
    }
}

window.Tabs = Tabs;