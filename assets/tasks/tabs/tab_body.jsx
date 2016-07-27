function TabBody(props) {
  
  let cssClasses = "ui bottom attached tab segment";
  if (props.isActive === true) {
    cssClasses += " active";
  }

  return (
    <div className={cssClasses}
      data-tab={props.id}>{props.content}</div>
  );
}

TabBody.propTypes = {
  id: React.PropTypes.number.isRequired,
  content: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool.isRequired
};

window.TabBody = TabBody;