-- +goose Up
-- +goose StatementBegin
CREATE TYPE "public"."waiting_status" AS ENUM('pending', 'invited', 'joined');

CREATE TABLE IF NOT EXISTS waiting_list (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "status" "waiting_status" DEFAULT 'pending', 
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS waiting_list;

DROP TYPE IF EXISTS waiting_status;
-- +goose StatementEnd
