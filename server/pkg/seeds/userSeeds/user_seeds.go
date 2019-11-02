package userSeeds

import (
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"fmt"
)

func SeedUsers () {

	var AllUsers []models.Users = []models.Users{
		models.Users{FirstName: "Ricky", LastName: "Rick", Email: "Sydney@gmail.com", Password: "RickyRox", Karma: 0},
		models.Users{FirstName: "Thomas", LastName: "Tom", Email: "TomBog@gmail.com", Password: "TomFTW", Karma: 0},
		models.Users{FirstName: "Chris", LastName: "Cris", Email: "Turnip@gmail.com", Password: "LoLisGreat", Karma: 0},
	 }

	 
	 fmt.Println("Seeding Users . . .")

	 for _, user := range AllUsers {
		config.GetDB().Create(&user)
	 }

	 fmt.Println("Seeding Complete!")
}