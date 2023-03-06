# Craft CMS Dev Environment
Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

## Requirements
-   Docker, https://www.docker.com
-   DDEV, https://ddev.com

## Steps
1. **Note the `./` at the end of the clone script**
- `git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./`
- `git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./`
---
2. **Remove link to scaffolding git repo**
`rm -rf .git`
---
3. **Allow DDEV to configure the project**
`ddev config`
---
4. **Check .ddev > config.yaml to see if**:
- The php_version is 8.1
- Database type is mariadb and v10.4
- webserver_type is nginx-fpm
---
7. **Update package.json information such as project name, author, etc**
---
8. **Run composer to fetch initial dependencies**
`composer install`
---
9. **Run make to handle remaining DDEV commands**
`make install`
---
10. **Start the DDEV servers**
`ddev start`
---
11. **Start the Vite servers**
`make dev`
---
12. **Navigate to https://{the-project-name}.ddev.site or https://{the-project-name}.ddev.site/admin**


## Credits
Forked from https://github.com/thomasbendl/craft4-ddev-vite-blueprint