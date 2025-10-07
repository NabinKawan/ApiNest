#!/bin/sh

if [ -n "$DATABASE_URL" ]; then
    export GOOSE_DRIVER=postgres
    export GOOSE_DBSTRING=${DATABASE_URL}
    /usr/local/bin/goose -dir ./migrations up

    echo "Migrations completed - starting application..."
fi

# Start the application
exec "$@"
