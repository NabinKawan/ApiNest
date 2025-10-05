package enum

import "database/sql/driver"

type WaitingStatus string

const (
	WaitingStatusPending WaitingStatus = "pending"
	WaitingStatusInvited WaitingStatus = "invited"
	WaitingStatusJoined  WaitingStatus = "joined"
)

func (s *WaitingStatus) Scan(value interface{}) error {
	*s = WaitingStatus(value.(string))
	return nil
}
func (s WaitingStatus) Value() (driver.Value, error) {
	return string(s), nil
}
