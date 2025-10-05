package helper

func SafePointer[T any](val T) *T { return &val }

func SafeDereference[T any](val *T) T {
	if val == nil {
		return *new(T)
	}
	return *val
}
