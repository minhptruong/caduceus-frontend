api url: http://caduceus-load-balancer-871202212.us-east-1.elb.amazonaws.com
- on port 5000, but it seems to work without adding the port either
api endpoints (all post requests):
- '/query-list'
  just fetches all queries for nav display
- '/fetch-query'
  requires 'query_id' from 'query-list' to fetch all patient info
- '/delete-query'
  requires 'query_id' to delete query
- '/query'
  requires 'user_query' to create new query results
