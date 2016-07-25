/**
 * Created by rkonon on 2016-07-25.
 */
const tabs = [{
    id: 0,
    tabTitle: 'First',
    tabContent: 'First'
}, {
    id: 1,
    tabTitle: 'Second',
    tabContent: 'Second'
}, {
    id: 2,
    tabTitle: 'Third',
    tabContent: 'Third'
}];

class App extends React.Component {
    render() {
        return (
            <Tabs tabs={tabs} selectedTab={2}/>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);