package controllers

import (
	// "encoding/json"
	"github.com/ChrisnNg/cat_park/server/pkg/helpers"
	// "github.com/gorilla/mux"
	"fmt"
	"net/http"
	"encoding/json"
	"log"
	"net/url"
	// "github.com/ChrisnNg/cat_park/server/pkg/config"
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	// "github.com/paulmach/go.geojson"
	_ "github.com/lib/pq"
	// "github.com/jmoiron/sqlx"
)

var NewSpot models.Parkings
// var NewCrime models.Crime

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Hello!")
	return
}

func AddUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Added User to database!")
	return
}

func FindUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Incorrect Info / Logged in!")
	return
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Updated password!")
	return
}

func AllCrimeData(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	crimeType := r.URL.Query().Get("crimeType")
	newCrimes := models.GetAllCrimes(crimeType)
	res, _ := json.Marshal(newCrimes)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)

}

func AllParkingData(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	lng := r.URL.Query().Get("lng")
	lat := r.URL.Query().Get("lat")
	newParkings := models.GetAllParkings(lng, lat)
	res, _ := json.Marshal(newParkings)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func AddParkingSpot(w http.ResponseWriter, r *http.Request) {
	AddParkingSpot := &models.Parkings{}
	helpers.ParseBody(r, AddParkingSpot)
	p:= AddParkingSpot.AddParkingSpot()
	res,_ := json.Marshal(p)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func APITest(w http.ResponseWriter, r *http.Request) {
	type Numverify struct {
		Valid               bool   `json:"valid"`
		Number              string `json:"number"`
		LocalFormat         string `json:"local_format"`
		InternationalFormat string `json:"international_format"`
		CountryPrefix       string `json:"country_prefix"`
		CountryCode         string `json:"country_code"`
		CountryName         string `json:"country_name"`
		Location            string `json:"location"`
		Carrier             string `json:"carrier"`
		LineType            string `json:"line_type"`
	}

	phone := "14158586273"
	// QueryEscape escapes the phone string so
	// it can be safely placed inside a URL query
	safePhone := url.QueryEscape(phone)
	url := fmt.Sprintf("http://apilayer.net/api/validate?access_key=f87f46c03d6d4ffab6e216d0f90f896a&number=%s", safePhone)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal("NewRequest: ", err)
		return
	}

	client := &http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Do: ", err)
		return
	}

	defer resp.Body.Close()

	var record Numverify

	if err := json.NewDecoder(resp.Body).Decode(&record); err != nil {
		log.Println(err)
	}

	fmt.Println("Phone No. = ", record.InternationalFormat)
	fmt.Println("Country   = ", record.CountryName)
	fmt.Println("Location  = ", record.Location)
	fmt.Println("Carrier   = ", record.Carrier)
	fmt.Println("LineType  = ", record.LineType)

}





	// type CrimesA struct {  
	// 	Type    string  
	// 	X   float64 `gorm:"type:decimal(17,0)"`
	// 	Y    float64 `gorm:"type:decimal(17,0)"`
	// 	}

	// 	type CrimesB struct {  
	// 	Type    string  `db:"type"` 
	// 	X  float64  `db:"x"`
	// 	Y  float64  `db:"y"`
	// 	}

	// 	rows := CrimesA{}
	// 	err := db.Get(&rows, "Select * From crimes")

	// 	data := CrimesB{}
	// 	data.Type = rows.Type
	// 	data.X = rows.X
	// 	data.Y = rows.Y

	// 	j,_ := json.Marshal(&data)
	// 	w.WriteHeader(http.StatusOK)
	// 	w.Write(j)

	// row := db.QueryRow("SELECT type, ST_AsGeoJSON(geom) FROM crimes")