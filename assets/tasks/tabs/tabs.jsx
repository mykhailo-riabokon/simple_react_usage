class Tabs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTabId: props.activeTabId
    };
  }

  setActiveTab(tabId) {
    this.setState({ activeTabId: tabId });
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui top attached tabular menu">
          {
            this.props.tabs.map((tab) => {
              return <TabHeader key={tab.id}
                id={tab.id}
                title={tab.title}
                isActive={tab.id === this.state.activeTabId}
                setActive={this.setActiveTab.bind(this, tab.id) }/>
            })
          }
        </div>
        {
          this.props.tabs.map((tab) => {
            return <TabBody key={tab.id}
              id={tab.id}
              content={tab.content}
              isActive={tab.id === this.state.activeTabId}/>
          })
        }
      </div>

    );
  }
}

Tabs.propTypes = {
  tabs: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired
    })).isRequired,
  activeTabId: React.PropTypes.number.isRequired
};

window.Tabs = Tabs;