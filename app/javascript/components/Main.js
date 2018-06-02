import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Subscription } from 'react-apollo';
import gql from 'graphql-tag';

import apolloClientConfig from '../apollo/client-config';
import ChatBox from './ChatBox';

const MESSAGE_SUBSCRIPTION = gql`
  subscription {
    messageAdded {
      id
      text,
      username
    }
  }
`

class Main extends React.Component {
  render () {
    return (
      <ApolloProvider client={apolloClientConfig}>

        <Subscription
          subscription={MESSAGE_SUBSCRIPTION}
        >
          {({data}) => {
            return (<ChatBox newMessage={data ? data.messageAdded : null} />)
          }}
        </Subscription>
      </ApolloProvider>
    );
  }
}

export default Main;
