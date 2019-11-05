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
	// query := `SELECT ST_AsGeoJSON(geom) AS geojson FROM CRIMES LIMIT 10`
	// fmt.Println(query)
	// fmt.Println("1")
	crimes := make([]Crimes, 0)
	// fmt.Println("2")
	// db.Find(&crimes)
	db.Raw(`SELECT * FROM Crimes where ST_DWithin(geom::geography, ST_MakePoint(-123.114370, 49.281295)::geography, 10000);`).Scan(&crimes)
	// fmt.Println("3")
	return crimes
}

func GetAllParkings() []Parkings {
	parkings := make([]Parkings, 0)
	db.Find(&parkings)
	return parkings
}

func ResetDB() {
	// db.DropTableIfExists(Users{}, Crimes{})
	db.AutoMigrate(Parkings{})
}

func DropTables() {
	db.DropTableIfExists(Users{}, Crimes{})
}

