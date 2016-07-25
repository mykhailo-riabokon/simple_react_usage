/**
 * Created by rkonon on 2016-07-25.
 */
class App extends React.Component {
    render() {
        return (
            <Modal isShown={true}>
                <h1>Some modal content</h1>
            </Modal>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);