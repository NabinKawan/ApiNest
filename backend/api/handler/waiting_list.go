package handler

import (
	"apinest/api/dto"
	"apinest/api/service"

	"github.com/gin-gonic/gin"
)

type WaitingListHandler struct {
	service *service.WaitingListService
}

func NewWaitingListHandler(s *service.WaitingListService) *WaitingListHandler {
	return &WaitingListHandler{service: s}
}

// @Summary Create waiting list
// @Accept json
// @Param body body dto.WaitingListRequestDTO true "WaitingList request"
// @Success 200 {object} map[string]string
// @Router /v1/waiting-list [post]
// @ID createWaitingList
func (h *WaitingListHandler) CreateWaitingList(c *gin.Context) {
	var req dto.WaitingListRequestDTO
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	err := h.service.AddToWaitingList(c.Request.Context(), req.Email)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "waiting list created"})
}
