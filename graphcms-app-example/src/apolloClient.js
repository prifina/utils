import { ApolloClient, InMemoryCache } from '@apollo/client';

const API = 'https://api-us-west-2.graphcms.com/v2/ckhkrkt47eyly01z12b702jo6/master';

export const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache()
});



