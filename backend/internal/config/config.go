package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	Port        string
	DatabaseURL string
	Env         string
}

var cfg *Config

func GetConfig() *Config {
	if cfg == nil {
		return LoadConfig()
	}

	return cfg
}

func LoadConfig() *Config {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using OS environment variables")
	}

	cfg = &Config{
		Port:        getEnv("PORT", "8081"),
		DatabaseURL: getEnv("DATABASE_URL", "postgres://postgres:password@localhost:5432/apinest"),
		Env:         getEnv("APP_ENV", "development"),
	}

	return cfg
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}

	return fallback
}
