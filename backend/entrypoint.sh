#!/bin/sh

export GOOSE_DRIVER=postgres
export GOOSE_DBSTRING=${DATABASE_URL}
/usr/local/bin/goose -dir ./migrations up

echo "Migrations completed - starting application..."

# Start the application
exec "$@"
