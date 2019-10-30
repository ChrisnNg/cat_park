package main

import (
	"net/http"
	"log"
	"flag"
	"github.com/ChrisnNg/cat_park/server/pkg/router"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"fmt"
)

func main() {
	wordPtr := flag.String("task", "foo", "a string")
	flag.Parse()

	fmt.Println(myTypes.Users)

	if *wordPtr == "Migrate" {
		fmt.Println("Migrating from main . . .")
	}

	r := mux.NewRouter()
	routes.RegisterParkingSpotRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8000", r))

}
