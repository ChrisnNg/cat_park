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

	err := godotenv.Load("/home/kirako431/lighthouse/Final/go/projects/cat_park/.env")
  if err != nil {
    log.Fatal("Error loading .env file")
	}
=======
>>>>>>> cf05fa6fbec698abcc28c3e4d59a6b1d7fc3d755
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

