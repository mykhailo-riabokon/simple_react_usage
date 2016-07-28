class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tab';
        this._renderContext = this._renderContext.bind(this);
    }

    _renderContext() {
        let classNames = 'ui bottom attached tab segment';
        let activeClass = ((this.props.selectedTab == this.props.tab.id) ? 'active' + classNames : classNames);
        return (<div className={activeClass} data-tab={this.props.tab.id}>
                  {this.props.tab.content}
                </div>)
    }

    render() {
        return this._renderContext();
    }
}

window.Tab = Tab;
