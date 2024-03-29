package models

import (
	"fmt"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"
	"github.com/dewski/spatial"
)

var db *gorm.DB

func init() {
	config.Connect()
	db = config.GetDB()
}

type Users struct {
	ID       uint `gorm:"primary_key"`
	FirstName     string
	LastName string
	Email string
	Password string
	Karma    int
}

type Crimes struct {
	Type        string `json:"type"`
	X   float64
	Y    float64
	Geom spatial.Point `gorm:"type:geometry(Geometry,4326)"` 
}

type Parkings struct {
	METERHEAD string `json:"meterhead"`
	TIMEINEFFE string `json:"timeineffe"`
	GEO_LOCAL_AREA string `json:"geo_local_area"`
	Longitude float64
	Latitude  float64
	Geom spatial.Point `gorm:"type:geometry(Geometry,4326)"`
}

func GetAllCrimes(crimeType string) []Crimes {
	crimeQuery := `SELECT * FROM Crimes WHERE type=?;`
	crimes := make([]Crimes, 0)
	db.Raw(crimeQuery, crimeType).Scan(&crimes)
	return crimes
}

func GetAllCrimeQuery() []Crimes {
	allCrimesQ := make([]Crimes, 0)
	db.Find(&allCrimesQ)
	return allCrimesQ
}


func GetAllParkings(lng string, lat string) []Parkings {
	parkingQuery := `SELECT * FROM Parkings where ST_DWithin(geom::geography, ST_MakePoint(?, ?)::geography, 300);`
	parkings := make([]Parkings, 0)
	db.Raw(parkingQuery, lng, lat).Scan(&parkings)
	return parkings
}

func (p *Parkings) AddParkingSpot() *Parkings {
	if db.NewRecord(p) {
		db.Create(&p)
		return p
	} else {
	fmt.Println("This record is already in the database!")
	return nil
	}
}

func ResetDB() {
	// db.DropTableIfExists(Users{}, Crimes{})
	db.AutoMigrate(Parkings{}, Crimes{})
}

func DropTables() {
	db.DropTableIfExists(Users{}, Crimes{})
}

