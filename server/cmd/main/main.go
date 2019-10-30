package main

import (
	"net/http"
	"log"
	"flag"
	"github.com/ChrisnNg/cat_park/server/pkg/router"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"fmt"
)

func main() {
	config.Connect()
	db := config.GetDB()


	wordPtr := flag.String("task", "foo", "a string")
	flag.Parse()

	// u := models.Users{}
	// fmt.Println(u)

	if *wordPtr == "ResetDB" {
		fmt.Println("Migrating from main . . .")
		db.DropTableIfExists(models.Users{}, models.Parkings{}, models.Crimes{})
		db.AutoMigrate(models.Users{}, models.Parkings{}, models.Crimes{})
	}

	r := mux.NewRouter()
	routes.RegisterParkingSpotRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8000", r))

}
