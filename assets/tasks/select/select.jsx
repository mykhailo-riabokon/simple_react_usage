class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      selectedLabel: ''
    };

    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onSelectClick(event) {
    const selectContainer = event.currentTarget;
    const select = selectContainer.querySelector('.menu');

    selectContainer.classList.toggle('active');
    selectContainer.classList.toggle('visible');

    select.classList.toggle('hidden');
    select.classList.toggle('visible');
  }

  onOptionClick(args) {
    this.setState({
      selectedLabel: args.label,
      selectedValue: args.value
    });

    this.props.onChanged(args.value);
  }

  checkSelectedLabel(newState) {
    const selectedLabel = this.refs.selectedLabel;

    if (newState.selectedValue && selectedLabel.classList.contains('default')) {
      selectedLabel.classList.remove('default');
    }
  }

  componentWillUpdate(props, newState) {
    this.checkSelectedLabel(newState)
  }

  render() {
    return (
      <div ref="selectContainer" className="ui selection dropdown" onClick={this.onSelectClick}>
        <input type="hidden" name="gender" value={this.state.selectedValue} />
        <i className="dropdown icon"></i>
        <div ref="selectedLabel" className="default text">
          {this.state.selectedLabel || this.props.placeholder}
        </div>
        <div className="menu transition hidden">
          {this.props.options.map((option, index) => {
            return <Option key={index} {...option} onOptionClick={this.onOptionClick} />
          })}
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  placeholder: React.PropTypes.string,
  onChanged: React.PropTypes.func,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired
    })
  ).isRequired,
};

Select.defaultProps = {
  placeholder: '',
  onChanged: (value) => {
    console.log('Selected value is', value);
  }
};

// Do not use it in real applications. Use ES6 modules instead.
window.Select = Select;
