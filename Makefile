.PHONY: build up up-d down logs

build:
	docker compose build

up:
	docker compose up

up-d:
	docker compose up -d

up-db:
	docker compose up postgres_db

down:
	docker compose down

logs:
	docker compose logs -f
