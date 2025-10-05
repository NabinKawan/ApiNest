package dto

type WaitingListRequestDTO struct {
	Email string `json:"email"  binding:"required,email"`
}
