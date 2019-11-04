package models

import (
	// "fmt"
	// "github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/jinzhu/gorm"

	// "github.com/cridenour/go-postgis"
	// "github.com/dewski/spatial"

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

// type Parkings struct {
// 	ID        uint `gorm:"primary_key"`
// 	Longitude float64 `gorm:"type:decimal(10,8)"`
// 	Latitude  float64 `gorm:"type:decimal(11,8)"`
// 	Rating    int
// 	Karma     int
// 	Photo_url string
// }

type Crimes struct {
	Type        string
	X   float64 `gorm:"type:decimal(17,0)"`
	Y    float64 `gorm:"type:decimal(17,0)"`
}

type Parkings struct {
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
}

