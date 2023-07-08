package main

import (
	"log"
	"net/http"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
)

func main() {
	// Define your schema
	rootQuery := graphql.NewObject(graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"hello": &graphql.Field{
				Type: graphql.String,
				Resolve: func(p graphql.ResolveParams) (interface{}, error) {
					return "Hello, World!", nil
				},
			},
		},
	})

	schema, err := graphql.NewSchema(graphql.SchemaConfig{
		Query: rootQuery,
	})

	if err != nil {
		log.Fatal(err)
	}

	// Set up your server configuration
	graphqlHandler := handler.New(&handler.Config{
		Schema: &schema,
		Pretty: true,
	})

	// Set up your routes or endpoints
	http.Handle("/graphql", graphqlHandler)

	// Start your server
	log.Println("GraphQL server running at http://localhost:8080/graphql")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
