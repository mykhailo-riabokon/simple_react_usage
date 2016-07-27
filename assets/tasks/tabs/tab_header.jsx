function TabHeader(props) {

  let cssClasses = "item";
  if (props.isActive === true) {
    cssClasses += " active";
  }

  return (
    <a className={cssClasses} data-tab={props.id} onClick={props.setActive}>{props.title}</a>
  );
}

TabHeader.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool.isRequired,
  setActive: React.PropTypes.func.isRequired
};

window.TabHeader = TabHeader;