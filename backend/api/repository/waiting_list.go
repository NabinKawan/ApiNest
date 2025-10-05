package repository

import (
	"apinest/internal/db/gen/model"
	"apinest/internal/db/gen/query"
	"context"
)

type WaitingListRepository struct{}

func NewWaitingListRepository() *WaitingListRepository {
	return &WaitingListRepository{}
}

func (r *WaitingListRepository) CreateWaitingList(ctx context.Context, waitingList model.WaitingList) error {
	return query.WaitingList.WithContext(ctx).Create(&waitingList)
}
