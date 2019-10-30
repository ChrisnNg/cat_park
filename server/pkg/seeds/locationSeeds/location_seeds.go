package locationSeeds

import (
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"fmt"
)

func SeedLocations () {

	var AllParkings []models.Parkings = []models.Parkings{
		models.Parkings{Longitude: 49.285898, Latitude: -123.126496, Rating: 0, Karma: 0, Photo_url: "www.example.com"},
		models.Parkings{Longitude: 49.278508, Latitude: -123.047803, Rating: 0, Karma: 0, Photo_url: "www.example.com"},
		models.Parkings{Longitude: 49.219118, Latitude: -123.081777, Rating: 0, Karma: 0, Photo_url: "www.example.com"},
	 }

	 
	 fmt.Println("Seeding Parkings . . .")

	 for _, parking := range AllParkings {
		config.GetDB().Create(&parking)
	 }

	 fmt.Println("Seeding Complete!")
}