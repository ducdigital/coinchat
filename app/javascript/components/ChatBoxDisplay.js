import React from "react"
import PropTypes from "prop-types"
class ChatBoxDisplay extends React.Component {
  render () {
    const { messages } = this.props;
    return (
      <ul>
        {
          messages.map(message => (
            <li key={message.id}>
              <b>{ message.username }</b>:&nbsp;
              { message.text }
            </li>
          ))
        }
      </ul>
    );
  }
}

ChatBoxDisplay.defaultProps = {
  messages: [],
};

ChatBoxDisplay.propTypes = {
  messages: PropTypes.array,
};

export default ChatBoxDisplay;

