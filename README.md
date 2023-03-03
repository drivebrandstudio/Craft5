# Craft CMS Dev Environment
Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

## Requirements
-   Docker, https://www.docker.com
-   DDEV, https://ddev.com

## Steps
1. **Start by cloning the scaffolding with either HTTPS or SSH**
- `git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./`
- `git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./`

### Notice the `./` at the end of the clone script. This places all of the code inside of the directory you created, which will aid DDEV in generating the project. 
---
2. **Remove link to scaffolding git repo**
`rm -rf .git`
---
3. **Next configure what type of project the website will utilize**
`ddev config`
---
4. **Check .ddev > config.yaml to see if the php_version is 8.1**
---
5. **Check .ddev > config.yaml to see if the database type is mariadb and v10.4**
---
6. **Check .ddev > config.yaml to see if the webserver_type is nginx-fpm**
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