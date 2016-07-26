function TabBody(props) {
  return (
    <div className={props.isActive === true ? "ui bottom attached tab segment active" : "ui bottom attached tab segment"}
      data-tab={props.id}>{props.content}</div>
  );
}

TabBody.propTypes = {
  id: React.PropTypes.number.isRequired,
  content: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool.isRequired
};

window.TabBody = TabBody;