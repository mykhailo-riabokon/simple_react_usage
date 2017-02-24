class App extends React.Component {
    render() {
        return (
            <Modal isShown={true}>
            <h1>Content goes here</h1>
            </Modal>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)