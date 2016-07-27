class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tabs';
    }
    render() {
        return (<div class="ui top attached tabular menu">

                  // <a class="item active" data-tab="first">First</a>
                  // <a class="item" data-tab="second">Second</a>
                  // <a class="item" data-tab="third">Third</a>
                </div>
                {this.props.tabs.map((tab,index) => {
                    return <Tab content={tab} selectedTab={this.state.selectedTab}/>
                })}
                // <div class="ui bottom attached tab segment active" data-tab="first">
                //   First
                // </div>
                // <div class="ui bottom attached tab segment" data-tab="second">
                //   Second
                // </div>
                // <div class="ui bottom attached tab segment" data-tab="third">
                //   Third
                // </div>
                );
    }
}

window.Tabs = Tabs;
