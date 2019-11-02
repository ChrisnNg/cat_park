package crimeSeeds

import (
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"fmt"

)

func SeedCrimes () {


	var AllCrimes []models.Crimes = []models.Crimes{
		models.Crimes{Type: "Theft", X: 49.285898, Y: -123.126496},
		models.Crimes{Type: "BreakIn", X: 49.278508, Y: -123.047803},
		models.Crimes{Type: "Robbery", X: 49.219118, Y: -123.081777},
	 }

	 
	 fmt.Println("Seeding Crimes . . .")

	 for _, crime := range AllCrimes {
		config.GetDB().Create(&crime)
	 }

	 fmt.Println("Seeding Complete!")
}