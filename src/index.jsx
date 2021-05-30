import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-660ar008s-bryan250000.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById('App')
)
