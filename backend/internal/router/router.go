package router

import (
	"apinest/api/handler"
	"apinest/api/repository"
	"apinest/api/service"
	"apinest/internal/config"
	"context"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	_ "apinest/docs"
)

const (
	V1 = "/v1"
)

// New creates route endpoint.
func New(ctx context.Context) *gin.Engine {
	if config.GetConfig().Env == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	g := gin.Default()

	g.Use(gin.Logger(), gin.Recovery())
	g.RedirectTrailingSlash = false

	g.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Origin", "Authorization"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	v1 := g.Group(V1)

	{
		wr := repository.NewWaitingListRepository()
		ws := service.NewWaitingListService(wr)
		wh := handler.NewWaitingListHandler(ws)

		v1.POST("/waiting-list", wh.CreateWaitingList)
	}

	g.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	g.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "Pong")
	})

	return g
}
