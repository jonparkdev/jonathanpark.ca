.Phone: build-dev
build-dev:
	docker compose -f docker-compose.dev.yml build

.Phone: up-dev
up-dev:
	docker compose -f docker-compose.dev.yml up

.Phone: build-prod
build-prod:
	docker compose -f docker-compose.yml build

.Phone: up-prod
up-prod:
	docker compose -f docker-compose.yml up