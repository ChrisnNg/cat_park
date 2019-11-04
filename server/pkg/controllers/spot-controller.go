package controllers

import (
	// "encoding/json"
	// "fmt"
	// "github.com/ChrisnNg/cat_park/server/pkg/helpers"
	// "github.com/gorilla/mux"
	"fmt"
	"net/http"
	"encoding/json"
	"log"
	"net/url"

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
	// type Parking struct {
	// 	Meterhead string `json:"meterhead"`
	// 	R_MF_9A_6P string `json:"r_mf_9a_6p"`
	// 	R_MF_6P_10 string `json:"r_mf_6p_10"`
	// 	R_SA_9A_6P string `json:"r_sa_9a_6p"`
	// 	R_SA_6P_10 string `json:"r_sa_6p_10"`
	// 	R_SU_9A_6P string `json:"r_su_9a_6p"`
	// 	R_SU_6P_10 string `json:"r_su_6p_10"`
	// 	RATE_MISC string `json:"rate_misc"`
	// 	TIMEINEFFE string `json:"timeineffe"`
	// 	T_MF_9A_6P string `json:"t_mf_9a_6p"`
	// 	T_MF_6P_10 string `json:"t_mf_6p_10"`
	// 	T_SA_6P_10 string `json:"t_sa_6p_10"`
	// 	T_SU_9A_6P string `json:"t_su_9a_6p"`
	// 	T_SU_6P_10 string `json:"t_su_6p_10"`
	// 	TIME_MISC string `json:"time_misc"`
	// 	CREDITCARD string `json:"creditcard"`
	// 	PAY_PHONE string `json:"pay_phone"`
	// 	GEOM 
	// }
}

func AddParkingSpot(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Add API data from website placeholder")
	return
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

	// For control over HTTP client headers,
	// redirect policy, and other settings,
	// create a Client
	// A Client is an HTTP client
	client := &http.Client{}

	// Send the request via a client
	// Do sends an HTTP request and
	// returns an HTTP response
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Do: ", err)
		return
	}

	// Callers should close resp.Body
	// when done reading from it
	// Defer the closing of the body
	defer resp.Body.Close()

	// Fill the record with the data from the JSON
	var record Numverify

	// Use json.Decode for reading streams of JSON data
	if err := json.NewDecoder(resp.Body).Decode(&record); err != nil {
		log.Println(err)
	}

	fmt.Println("Phone No. = ", record.InternationalFormat)
	fmt.Println("Country   = ", record.CountryName)
	fmt.Println("Location  = ", record.Location)
	fmt.Println("Carrier   = ", record.Carrier)
	fmt.Println("LineType  = ", record.LineType)

}