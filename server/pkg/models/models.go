package models

import (
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

type User struct {
	gorm.Model
	Name     string
	Username string
	Password string
	Karma    int
}

type Parking struct {
	gorm.Model
	Longitude int
	Latitude  int
	Rating    int
	Karma     int
	Photo_url string
}

func init() {
	config.Connect()
	db := config.GetDB()
	db.AutoMigrate(&User{}, &Parking{})
}
