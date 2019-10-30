package models

import (
	// "fmt"
	"time"

	// "github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

type Users struct {
	ID       uint `gorm:"primary_key"`
	Name     string
	Username string
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
	ID          uint `gorm:"primary_key"`
	Type        string
	Approx_time time.Time
	Longitude   float64 `gorm:"type:decimal(10,8)"`
	Latitude    float64 `gorm:"type:decimal(11,8)"`
}


