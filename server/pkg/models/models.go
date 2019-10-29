package models

import (
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

type User struct {
	gorm.Model
	Name string
	Username string
	Password string
	Karma int 
}

type Parkings struct {
	gorm.Model
	longitude int
	latitude int
	rating int `gorm:"default:0"`
	karma int `gorm:"default:0"`
	photo_url string
}

func init() {
	config.Connect()
	db := config.GetDB()
	db.AutoMigrate(&User{})
	db.AutoMigrate(&Parkings{})
}