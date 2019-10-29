package routes

import (
	"github.com/ChrisnNg/cat_park/server/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterParkingSpotRoutes = func(router *mux.Router) {
	router.HandleFunc("/", controllers.Home).Methods("GET")
	router.HandleFunc("/ParkingSpots/", controllers.NewSpot).Methods("POST")
	router.HandleFunc("/ParkingSpots/", controllers.GetSpots).Methods("GET")
}
