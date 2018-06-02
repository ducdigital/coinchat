import React from "react"
import PropTypes from "prop-types"
class ChatBoxInput extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.submit = this.submit.bind(this);
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.submit();
    }
  }

  onInputChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  submit() {
    this.props.onSubmit(this.state.inputText);
  }

  render () {
    const { inputText } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress} />
        <button onClick={this.submit}>Send chat</button>
      </div>
    );
  }
}

ChatBoxInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChatBoxInput
