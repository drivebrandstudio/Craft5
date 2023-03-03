# Craft CMS Dev Environment
Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

## Requirements
-   Docker, https://www.docker.com
-   DDEV, https://ddev.com

## Steps
### Start by cloning the scaffolding with either HTTPS or SSH
- `git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./`
<br />

- `git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./`  

 **Notice the `./` at the end of the clone script. This places all of the code inside of the directory you created, which will aid DDEV in generating the project.** 
---
### Remove link to scaffolding git repo  

- ```rm -rf .git```
---
### Next configure what type of project the website will utilize

- ```ddev config```
---

### Now there should be a ddev > config.yaml file

- add  

  - ```webimage_extra_packages: [gconf-service, libasound2, libatk1.0-0, libcairo2, libgconf-2-4, libgdk-pixbuf2.0-0, libgtk-3-0, libnspr4, libpango-1.0-0, libpangocairo-1.0-0, libx11-xcb1, libxcomposite1, libxcursor1, libxdamage1, libxfixes3, libxi6, libxrandr2, libxrender1, libxss1, libxtst6, fonts-liberation, libnss3, xdg-utils]```
<br />

 - php_version is 8.1
<br />

- database type is mariadb and v10.4
<br />

 - webserver_type is nginx-fpm
---
### Update package.json
- information such as
- project name
- author
- etc
---
### Run composer to fetch initial dependencies  

- ```composer install```
---
### Run make to handle remaining DDEV commands  

- ```make install```
---
### Start the DDEV servers  

- ```ddev start```
---
### Start the Vite servers  

- ```make dev```
---
### Navigate to https://{the-project-name}.ddev.site or https://{the-project-name}.ddev.site/admin


## Credits
Forked from https://github.com/thomasbendl/craft4-ddev-vite-blueprint