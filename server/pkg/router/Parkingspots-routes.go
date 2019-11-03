package routes

import (
	"github.com/ChrisnNg/cat_park/server/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterParkingSpotRoutes = func(router *mux.Router) {
	router.HandleFunc("/", controllers.Home).Methods("GET")
	router.HandleFunc("/Users/", controllers.AddUser).Methods("POST")
	router.HandleFunc("/Users/", controllers.FindUser).Methods("GET")
	router.HandleFunc("/Users/", controllers.UpdateUser).Methods("UPDATE")
	router.HandleFunc("Data/Crime/", controllers.AllCrimeData).Methods("GET")
	router.HandleFunc("Data/Parking/", controllers.AllParkingData).Methods("GET")
	router.HandleFunc("Data/Parking/", controllers.AddParkingSpot).Methods("POST")
}
