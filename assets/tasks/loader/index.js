/**
 * Created by rkonon on 2016-07-25.
 */
class App extends React.Component {
    render() {
        return (
            <Loader isShown={true} loadingText="Custom Text" />
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);