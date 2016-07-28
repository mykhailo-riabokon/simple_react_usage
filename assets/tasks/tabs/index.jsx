const tabs = [
    {
        title : 'First',
        content : 'First tab with highest priority'
    },
    {
        title : 'Second',
        content : 'Second tab with medium priority'
    },
    {
        title : 'Third',
        content : 'Third tab with lowest priority'
    }
];

class App extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Tabs tabs={this.props.data}/>
            </div>
        )
    }
}

App.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string,
            content: React.PropTypes.string
        })
    )
}

ReactDOM.render(
    <App data={tabs}/>,
    document.getElementById('app')
);