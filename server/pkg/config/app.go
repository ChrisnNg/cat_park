package config

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	
)

var (
	db * gorm.DB
)




func Connect() {
	d, err := gorm.Open("postgres", "host=localhost port=5432 user=vagrant dbname=cat_park password=123")
	if err != nil {
		panic(err)
	}
	db = d

	fmt.Println("Successfully connected!")
}

func GetDB() *gorm.DB {
	return db
}
