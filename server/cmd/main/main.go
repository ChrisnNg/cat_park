package main

import (

	"net/http"

	"github.com/ChrisnNg/cat_park/server/pkg/router"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterParkingSpotRoutes(r)
	http.Handle("/", r)
	http.ListenAndServe(":8000", nil)

}


