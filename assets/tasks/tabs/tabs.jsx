class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: this.props.selectedTab}
  }

  handleTabTitleChange(tabId){
    this.setState({
      selected: tabId});
  }

  isTabActive(index) {
    return 'ui bottom attached ' + (this.props.tabs[index].id == this.state.selected ? ' active ' : '') + 'tab segment';
  }

  isContentActive(index) {
    return (this.props.tabs[index].id == this.state.selected ? 'active ' : '') + 'item';
  }

  getTabContent() {
    return this.props.tabs.map((tab, index) => {
      return <div className={this.isTabActive(index) } key={index} data-tab={tab.id}>
        {tab.content}
      </div>
    })
  };

  getTabTitles(){
    return (
      <div className="ui top attached tabular menu">
        {this.props.tabs.map((tab, index) => {
          return <a className={this.isContentActive(index) } onClick={this.onTabTitleClick.bind(this, tab.id) } key={index} data-tab={tab.id}>{tab.title}</a>
        }) }
      </div>
    );
  }

  onTabTitleClick(tabId) {
    this.setState({
      selected: tabId
    });
  }

  render() {
    return (
      <div>
        {this.getTabTitles()}
        {this.getTabContent()}
      </div>
    );
  }
}

Tabs.propTypes = {
  selectedTab: React.PropTypes.string.isRequired,
  tabs: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  ).isRequired
};

// Do not use it in real applications. Use ES6 modules instead.
window.Tabs = Tabs;
