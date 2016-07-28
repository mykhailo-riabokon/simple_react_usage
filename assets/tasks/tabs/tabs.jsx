class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tabs';

        this.state = {
            selectedTab: this.props.selectedTab
        };

        this.onTabChanged = this.onTabChanged.bind(this);

    }

    onTabChanged(value) {
        this.setState({ selectedTab: value });
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                  <a className="item" data-tab="first" onClick={this.onTabChanged}>First</a>
                  <a className="item" data-tab="second">Second</a>
                  <a className="item" data-tab="third">Third</a>
                </div>
                {this.props.tabs.map((tab) => {
                    return <Tab tab={tab} selectedTab={this.state.selectedTab} key={tab.id}/>
                })}
            </div>
            );
    }
}

window.Tabs = Tabs;
