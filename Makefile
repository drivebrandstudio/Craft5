.PHONY: build dev up install

build: up
	ddev exec npm run build
dev: up
	ddev exec npm run dev	
setup: 
	ddev config
	if [ ! "$$(ddev describe | grep OK)" ]; then \
		ddev start; \
		ddev composer install; \
		ddev exec npm install; \
    fi
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft plugin/install redactor
	ddev exec php craft plugin/install vite
	ddev exec npm run build
	ddev exec npm run dev
install: up build
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft plugin/install redactor
	ddev exec php craft plugin/install vite
	@echo "ready to take off 🎉🎉🎉"
	@echo "type 'make dev' to  run vite development server"
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
		ddev start; \
		ddev composer install; \
		ddev exec npm install; \
    fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line