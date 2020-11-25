
import React from "react";
import {
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";



import {client} from './apolloClient'

client
  .query({
    query: gql`
    query Location {
      locations {
        accuracy
        coordinates {
          latitude
          longitude
        }
        id
        timestamp
        verticalAccuracy
      }
    }    
    `
  })
  .then(result => console.log(result));

  const LOCATION_DETAILS = gql`
  query Location {
    locations {
      accuracy
      coordinates {
        latitude
        longitude
      }
      id
      timestamp
      verticalAccuracy
    }
  }    
`;

  function LocationDetails() {
    const { loading, error, data } = useQuery(LOCATION_DETAILS);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
  
    return data.locations.map(({ accuracy, coordinates, id, timestamp,  verticalAccuracy  }) => (
      <div >
        <p>
          {accuracy}
          {coordinates}
          {id}
          {timestamp}
          {verticalAccuracy}
        </p>
      </div>
    ));
  }

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <LocationDetails />
      </div>
    </ApolloProvider>
  );
}

export default App
