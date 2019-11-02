package models

import (
	// "fmt"
	// "github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"

	// "github.com/cridenour/go-postgis"
)

var db *gorm.DB

type Users struct {
	ID       uint `gorm:"primary_key"`
	FirstName     string
	LastName string
	Email string
	Password string
	Karma    int
}

type Parkings struct {
	ID        uint `gorm:"primary_key"`
	Longitude float64 `gorm:"type:decimal(10,8)"`
	Latitude  float64 `gorm:"type:decimal(11,8)"`
	Rating    int
	Karma     int
	Photo_url string
}

type Crimes struct {
	Type        string
	X   float64 `gorm:"type:decimal(17,0)"`
	Y    float64 `gorm:"type:decimal(17,0)"`
}


