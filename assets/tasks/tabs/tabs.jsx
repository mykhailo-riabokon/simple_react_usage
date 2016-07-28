class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tabs';

        this.state = {
            selectedTab: this.props.selectedTab
        };

        this.onTabChanged = this.onTabChanged.bind(this);

    }

    onTabChanged(event) {
        const tab = event.currentTarget;
        this.setState({ selectedTab: tab.dataset.tab });
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                  <a className="item" data-tab="tab-id1" onClick={this.onTabChanged}>First</a>
                  <a className="item" data-tab="tab-id2" onClick={this.onTabChanged}>Second</a>
                  <a className="item" data-tab="tab-id3" onClick={this.onTabChanged}>Third</a>
                </div>
                {this.props.tabs.map((tab) => {
                    return <Tab tab={tab} selectedTab={this.state.selectedTab} key={tab.id}/>
                })}
            </div>
            );
    }
}

window.Tabs = Tabs;
