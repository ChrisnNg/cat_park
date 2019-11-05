package models

import (
	// "fmt"
	"github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"

	// "github.com/cridenour/go-postgis"
	"github.com/dewski/spatial"
	// "github.com/paulmach/go.geojson"
	// "github.com/twpayne/go-geom/encoding/geojson"
	// "github.com/twpayne/go-geom"


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
	X   float64 `gorm:"type:decimal(17,0)"`
	Y    float64 `gorm:"type:decimal(17,0)"`
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

func GetAllCrimes() []Crimes {
	// crimeQuery := `SELECT * FROM Crimes where Type = ?`
	crimes := make([]Crimes, 0)
	db.Limit(50).Find(&crimes)
	// db.Limit(50)Raw(crimeQuery, "Other Theft").Scan(&crimes)
	return crimes
}

func GetAllParkings() []Parkings {
	parkingQuery := `SELECT * FROM Parkings where ST_DWithin(geom::geography, ST_MakePoint(-123.157002968364, 49.2639857828638)::geography, 50);`
	parkings := make([]Parkings, 0)
	// db.Find(&parkings)
	db.Raw(parkingQuery).Scan(&parkings)
	return parkings
}

func ResetDB() {
	// db.DropTableIfExists(Users{}, Crimes{})
	db.AutoMigrate(Parkings{}, Crimes{})
}

func DropTables() {
	db.DropTableIfExists(Users{}, Crimes{})
}

