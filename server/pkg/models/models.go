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

type Parking struct {
	METERHEAD string `json:"meterhead"`
	R_MF_9A_6P string `json:"r_mf_9a_6p"`
	R_MF_6P_10 string `json:"r_mf_6p_10"`
	R_SA_9A_6P string `json:"r_sa_9a_6p"`
	R_SA_6P_10 string `json:"r_sa_6p_10"`
	R_SU_9A_6P string `json:"r_su_9a_6p"`
	R_SU_6P_10 string `json:"r_su_6p_10"`
	RATE_MISC string `json:"rate_misc"`
	TIMEINEFFE string `json:"timeineffe"`
	T_MF_9A_6P string `json:"t_mf_9a_6p"`
	T_MF_6P_10 string `json:"t_mf_6p_10"`
	T_SA_9A_6P string `json:"t_sa_9a_6p`
	T_SA_6P_10 string `json:"t_sa_6p_10"`
	T_SU_9A_6P string `json:"t_su_9a_6p"`
	T_SU_6P_10 string `json:"t_su_6p_10"`
	TIME_MISC string `json:"time_misc"`
	CREDITCARD string `json:"creditcard"`
	PAY_PHONE string `json:"pay_phone"`
	GEO_LOCAL_AREA string `json:"geo_local_area"`
	METERID string `json:"meterid"`
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
	db.Find(&crimes)
	// fmt.Println("3")
	return crimes
}

func ResetDB() {
	// db.DropTableIfExists(Users{}, Crimes{})
	db.AutoMigrate(Users{}, Crimes{})
}

func DropTables() {
	db.DropTableIfExists(Users{}, Crimes{})
}

