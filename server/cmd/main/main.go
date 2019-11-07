package main

import (
	"net/http"
	"log"
	"flag"
	"github.com/ChrisnNg/cat_park/server/pkg/router"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	// "github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"fmt"
	"github.com/ChrisnNg/cat_park/server/pkg/seeds/crimeSeeds"
	"github.com/ChrisnNg/cat_park/server/pkg/seeds/userSeeds"
	"github.com/ChrisnNg/cat_park/server/pkg/seeds/locationSeeds"
	// _ "github.com/joho/godotenv/autoload"
	// "os"
	// "github.com/cridenour/go-postgis"
	// "github.com/dewski/spatial"
	// "github.com/jinzhu/gorm"

)




func main() {

	// config.Connect()
	// db := config.GetDB()

	wordPtr := flag.String("task", "foo", "a string")
	flag.Parse()

	switch *wordPtr {
	case "ResetDB":
		fmt.Println("Resetting Database . . .")
		models.ResetDB()
		fmt.Println("Reset Complete!")
	case "DropTables":
		fmt.Println("Dropping Tables . . .")
		models.DropTables()
		fmt.Println("Tables Dropped!")
	case "SeedTables":
		fmt.Println("Seeding Tables . . .")
		userSeeds.SeedUsers()
		crimeSeeds.SeedCrimes()
		locationSeeds.SeedLocations()
	case "Start":
		fmt.Println("Starting Server . . .")
		r := mux.NewRouter()
		routes.RegisterParkingSpotRoutes(r)
		http.Handle("/", r)
		http.Handle("/APITest/", r)
		fmt.Println("Server listening on port 8000!")
		log.Fatal(http.ListenAndServe(":8001", r))
	default:
		fmt.Println("Please enter a valid flag")
	}
}
