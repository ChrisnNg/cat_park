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
	"github.com/ChrisnNg/cat_park/server/pkg/seeds/crimeSeeds"
	"github.com/ChrisnNg/cat_park/server/pkg/seeds/userSeeds"
	"github.com/ChrisnNg/cat_park/server/pkg/seeds/locationSeeds"
	// _ "github.com/joho/godotenv/autoload"
	// "os"
	// "github.com/cridenour/go-postgis"
	// "github.com/dewski/spatial"

)

func main() {

	config.Connect()
	db := config.GetDB()

	// path := []spatial.Point{}
  // err := db.
  // 	Select("geo").
  // 	From("crimes").
	// 	QueryStructs(&path)
	// 	if err != nil {
	// 		panic(err)
	// 	}

		// // Encode the path with .000000 level of precision
		// polyline := spatial.Encode(path, 6)
		// fmt.Println(polyline) // _p~iF~ps|U_ulLnnqC_mqNvxq`@
	
		// points := spatial.Decode(polyline, 6)
		// fmt.Println(polyline) // make(map[]spatial.Point, 2)

	wordPtr := flag.String("task", "foo", "a string")
	flag.Parse()

	switch *wordPtr {
	case "ResetDB":
		fmt.Println("Resetting Database . . .")
		db.DropTableIfExists(models.Users{}, models.Parkings{}, models.Crimes{})
		db.AutoMigrate(models.Users{}, models.Parkings{}, models.Crimes{})
		fmt.Println("Reset Complete!")
	case "DropTables":
		fmt.Println("Dropping Tables . . .")
		db.DropTableIfExists(models.Users{}, models.Parkings{}, models.Crimes{})
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
		fmt.Println("Server listening on port 8000!")
		log.Fatal(http.ListenAndServe(":8000", r))
	default:
		fmt.Println("Please enter a valid flag")
	}
}
