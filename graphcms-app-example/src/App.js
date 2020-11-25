
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
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

console.log(data.locations)

    return data.locations.map(({ id, accuracy, coordinates, timestamp,  verticalAccuracy  }) => (
      <div key={id}>
         <p style={{fontWeight: "bold"}}>
          Data Model ID: {id}
        </p>
        <p style={{fontaWeight: "bold"}}>
          Accuracy: {accuracy}
        </p>
        <p style={{fontWeight: "bold"}}>
        Coordinates Details: {JSON.stringify(coordinates)}
        </p>
        <p style={{fontWeight: "bold"}}>
        Timestamp: {timestamp}
        </p>
        <p style={{fontWeight: "bold"}}>
        Vertical Accuracy: {verticalAccuracy}
        </p>
      </div>
    ));
  }


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Location Data Model Details: </h2>
        <LocationDetails />
      </div>
    </ApolloProvider>
  );
}

export default App
