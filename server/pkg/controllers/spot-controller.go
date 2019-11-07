package controllers

import (
	"github.com/ChrisnNg/cat_park/server/pkg/helpers"
	"fmt"
	"net/http"
	"encoding/json"
	"github.com/ChrisnNg/cat_park/server/pkg/models"
	_ "github.com/lib/pq"
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

func AllCrimeQuery(w http.ResponseWriter, r *http.Request){
	enableCors(&w)
	allCrimes := models.GetAllCrimeQuery()
	res, _ := json.Marshal(allCrimes)
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