package db

import (
	"apinest/internal/config"
	"log"
	"os"
	"sync"
	"time"

	"github.com/sirupsen/logrus"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var instance *gorm.DB
var once sync.Once

func Connect() *gorm.DB {
	dsn := config.GetConfig().DatabaseURL

	var err error
	instance, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		logrus.Fatalf("failed to connect to db: %v", err)
	}

	sqlDB, _ := instance.DB()
	sqlDB.SetMaxOpenConns(20)
	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetConnMaxLifetime(time.Hour)

	return instance
}

func GetInstance() *gorm.DB {
	once.Do(func() {
		instance = Connect()
		switch config.GetConfig().Env {
		case "production":
			instance.Logger.LogMode(logger.Error)
		case "development":
			instance.Logger = logger.New(log.New(os.Stdout, "\r\n", log.LstdFlags),
				logger.Config{
					LogLevel:                  logger.Info,
					IgnoreRecordNotFoundError: true,
					ParameterizedQueries:      true,
					Colorful:                  true,
				})
		}
	})

	return instance
}
