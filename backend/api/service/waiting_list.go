package service

import (
	"apinest/api/repository"
	"apinest/internal/db/gen/model"
	"context"
)

type WaitingListService struct {
	repo *repository.WaitingListRepository
}

func NewWaitingListService(r *repository.WaitingListRepository) *WaitingListService {
	return &WaitingListService{repo: r}
}

func (s *WaitingListService) AddToWaitingList(ctx context.Context, email string) error {
	waitingList := model.WaitingList{
		Email: email,
	}

	return s.repo.CreateWaitingList(ctx, waitingList)
}
