class App extends React.Component {
    render() {
        return (
            <Loader isShown={true} loadingText='textToBePassed'/>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)