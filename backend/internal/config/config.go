package config

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
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
		logrus.Warn("Failed To Load ENV: ", err)
	}

	cfg = &Config{
		Port:        getEnv("PORT", "8081"),
		DatabaseURL: getEnv("DATABASE_URL", "postgres://postgres:password@localhost:5432/herotv"),
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
