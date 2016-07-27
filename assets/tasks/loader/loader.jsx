function Loader(props) {

  const cssClasses = props.isShown === true ? "ui active dimmer" : "";

  return (
    <div className={cssClasses}>
      <div className="ui text loader">{props.children}</div>
    </div>
  );
};

Loader.props = {
  isShown: React.PropTypes.bool.isRequired
};

window.Loader = Loader;