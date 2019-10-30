package userSeeds

import (
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"fmt"
)

func SeedUsers () {

	var AllUsers []models.Users = []models.Users{
		models.Users{Name: "Ricky", Username: "Sydney", Password: "RickyRox", Karma: 0},
		models.Users{Name: "Thomas", Username: "TomBog", Password: "TomFTW", Karma: 0},
		models.Users{Name: "Chris", Username: "Turnip", Password: "LoLisGreat", Karma: 0},
	 }

	 
	 fmt.Println("Seeding Users . . .")

	 for _, user := range AllUsers {
		config.GetDB().Create(&user)
	 }

	 fmt.Println("Seeding Complete!")
}