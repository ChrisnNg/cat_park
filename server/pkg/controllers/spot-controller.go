package controllers

import (
	// "encoding/json"
	// "fmt"
	// "github.com/ChrisnNg/cat_park/server/pkg/helpers"
	// "github.com/gorilla/mux"
	"fmt"
	"net/http"

	"github.com/ChrisnNg/cat_park/server/pkg/models"
)

var Spot models.Parkings

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
	fmt.Println("API Data placeholder")
	return
}

func AllParkingData(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API Data placeholder")
	return
}

func AddParkingSpot(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Add API data from website placeholder")
	return
}