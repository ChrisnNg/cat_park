package config

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"os"
	// "github.com/joho/godotenv"
	// "log"
	_ "github.com/joho/godotenv/autoload"
)

var (
	db *gorm.DB
)

func Connect() {
<<<<<<< HEAD

	err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
	}
=======
>>>>>>> master
	EnvHost := os.Getenv("Host")
	EnvPort := os.Getenv("Port")
	EnvUser := os.Getenv("User")
	EnvDBName := os.Getenv("DBName")
	EnvPassword := os.Getenv("Password")

	dbInfo := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s", EnvHost, EnvPort, EnvUser, EnvDBName, EnvPassword)
	fmt.Println(dbInfo)

	d, err := gorm.Open("postgres", dbInfo)
	if err != nil {
		panic(err)
	}
	db = d
	fmt.Println("Successfully connected!")
}

func GetDB() *gorm.DB {
	return db
}

