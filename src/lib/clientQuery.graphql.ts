// clientQuery.graphql

query GetClients {
  getClients {
    id
    name
    emails
    alias
    ruc
    dv
    phone
    receptorFeType
    contributorType
    imageUrl
  }
}