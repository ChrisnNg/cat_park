package routes

import (
	"github.com/ChrisnNg/cat_park/server/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterParkingSpotRoutes = func(router *mux.Router) {
	router.HandleFunc("/", controllers.Home).Methods("GET")
	router.HandleFunc("/Users/", controllers.AddUser).Methods("POST")
	router.HandleFunc("/Users/{id}", controllers.FindUser).Methods("GET")
	router.HandleFunc("/Users/{id}", controllers.UpdateUser).Methods("UPDATE")
	router.HandleFunc("/Data/Crime/", controllers.AllCrimeData).Queries("crimeType", "{crimeType}").Methods("GET")
	router.HandleFunc("/Data/Parking/", controllers.AllParkingData).Queries("lng", "{lng}", "lat", "{lat}").Methods("GET")
	router.HandleFunc("/Data/Parking/", controllers.AddParkingSpot).Methods("POST")
}
