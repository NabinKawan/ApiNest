FROM golang:1.24.6 AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go install github.com/swaggo/swag/cmd/swag@latest
RUN CGO_ENABLED=0 GOOS=linux go install github.com/pressly/goose/v3/cmd/goose@latest

RUN swag init -g ./cmd/server/main.go

RUN CGO_ENABLED=0 GOOS=linux go build -o /build ./cmd/server/

# Run stage
FROM alpine:latest

# Accept build arguments
ARG DATABASE_URL=postgresql://postgres:password@localhost:5432/apinest

# Set environment variables from build args
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_NAME=$DB_NAME
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app

COPY --from=builder /build /app/build
COPY --from=builder /app/internal/db/migrations /app/migrations
COPY --from=builder /app/entrypoint.sh /app/entrypoint.sh
COPY --from=builder /go/bin/goose /usr/local/bin/goose

RUN chmod +x /app/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["/app/build"]
