.PHONY: dev
dev:
	uvicorn app.main:app --reload --host 127.0.0.1 --port 5001

.PHONY: prod
prod:
	uvicorn app.main:app --host 0.0.0.0 --port 5001
