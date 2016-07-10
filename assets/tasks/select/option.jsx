function Option(props) {
  const onClick = (event) => {
    const option = event.currentTarget;

    props.onOptionClick({
      value: option.dataset.value,
      label: option.innerText
    });
  };

  return (
    <div className="item" data-value={props.value} onClick={onClick}>{props.label}</div>
  );
}

Option.propTypes = {
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onOptionClick: React.PropTypes.func.isRequired,
};

// Do not use it in real applications. Use ES6 modules instead.
window.Option = Option;
