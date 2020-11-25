import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const API = 'https://api.graphcms.com/https://api-us-west-2.graphcms.com/v2/ckhkrkt47eyly01z12b702jo6/mastersimple/v1/cjealxqk10oqs0196u32vz56e';

export const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache()
});



