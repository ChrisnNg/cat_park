package main

import (
	"log"
	"net/http"

	"github.com/ChrisnNg/cat_park/client/pkg/router"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", HomeHandler)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServer("localhost:8080", r))
}


