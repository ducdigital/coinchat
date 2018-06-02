import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Mutation, compose } from 'react-apollo';
import {
  isEmpty as _isEmpty,
  get as _get,
} from 'lodash';
import gql from 'graphql-tag';

import ChatBoxDisplay from './ChatBoxDisplay';
import ChatBoxInput from './ChatBoxInput';

const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!){
    message(text: $text) {
      id,
      text,
      username
    }
  }
`;

const GET_MESSAGES = gql`
{
  messages(limit: 5) {
    id
    text,
    username
  }
}
`;

class ChatBox extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.onChatSubmit = this.onChatSubmit.bind(this);
  }

  onChatSubmit(text) {
    const { messages } = this.state;
    const { createMessage } = this.props;

    this.props.createMessage({
      variables: {
        text,
      }
    });
  }

  render () {
    const { data } = this.props;
    const { messages } = this.state;

    if (!messages) {
      return null;
    }

    return (
      <React.Fragment>
        <ChatBoxDisplay messages={messages} />
        <ChatBoxInput onSubmit={this.onChatSubmit} />
      </React.Fragment>
    );
  }
}

ChatBox.getDerivedStateFromProps = (nextProps, prevState) => {
  let newState = {}
  if (!prevState.messages || (
    Array.isArray(prevState.messages) &&
    prevState.messages.length <= 0
  )) {
    newState.messages = nextProps.data.messages;
  }

  if (_get(nextProps, 'newMessage')) {
    newState.messages = [].concat(prevState.messages)
      .concat([nextProps.newMessage]);
  }

  if (_isEmpty(newState)) {
    return null;
  }

  return newState;
};

ChatBox.defaultProps = {
  data: {
    messages: [],
  },
};

ChatBox.propTypes = {
  data: PropTypes.object,
};

export default compose(
  graphql(GET_MESSAGES),
  graphql(CREATE_MESSAGE, { name: 'createMessage' })
)(ChatBox);
