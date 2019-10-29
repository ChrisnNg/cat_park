package models

import (
	"github.com/ChrisnNg/cat_park/client/pkg/config"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

type User struct {
	gorm.Model
	Name string `gorm:not null`
	Username string `gorm:unique;not null`
	Password string `gorm: not null`
	Karma int 
}

type Parkings struct {
	gorm.Model
	longitude int `gorm:not null`
	latitude int `gorm:not null`
	rating int `gorm:"default:0"`
	karma int `gorm:"default:0"`
	photo_url 
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&User{})
	db.AutoMigrate(&Parkings{})
}