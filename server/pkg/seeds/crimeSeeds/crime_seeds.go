package crimeSeeds

import (
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"fmt"
	"time"
)

func SeedCrimes () {

	var AllCrimes []models.Crimes = []models.Crimes{
		models.Crimes{Type: "Theft", Approx_time:time.Now(), Longitude: 49.285898, Latitude: -123.126496},
		models.Crimes{Type: "BreakIn", Approx_time:time.Now(), Longitude: 49.278508, Latitude: -123.047803},
		models.Crimes{Type: "Robbery", Approx_time:time.Now(), Longitude: 49.219118, Latitude: -123.081777},
	 }

	 
	 fmt.Println("Seeding Crimes . . .")

	 for _, crime := range AllCrimes {
		config.GetDB().Create(&crime)
	 }

	 fmt.Println("Seeding Complete!")
}