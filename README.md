# Craft CMS Dev Environment
Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

## Requirements
-   Docker, https://www.docker.com
-   DDEV, https://ddev.com

## Steps
1. **Start by cloning the scaffolding with either HTTPS or SSH**
- `git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./`
<br />

- `git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./`
<br />

### Notice the `./` at the end of the clone script. This places all of the code inside of the directory you created, which will aid DDEV in generating the project. 
---
2. **Remove link to scaffolding git repo**
<br />

```rm -rf .git```
---
3. **Next configure what type of project the website will utilize**
<br />

```ddev config```
---

4. **Now there should be a ddev > config.yaml file**

add 

<br />

 ```webimage_extra_packages: [gconf-service, libasound2, libatk1.0-0, libcairo2, libgconf-2-4, libgdk-pixbuf2.0-0, libgtk-3-0, libnspr4, libpango-1.0-0, libpangocairo-1.0-0, libx11-xcb1, libxcomposite1, libxcursor1, libxdamage1, libxfixes3, libxi6, libxrandr2, libxrender1, libxss1, libxtst6, fonts-liberation, libnss3, xdg-utils]```
<br />

 **php_version is 8.1**
<br />

 **database type is mariadb and v10.4**
<br />

 **webserver_type is nginx-fpm**
---
7. **Update package.json information such as project name, author, etc**
---
8. **Run composer to fetch initial dependencies**
<br />

```composer install```
---
9. **Run make to handle remaining DDEV commands**
<br />

```make install```
---
10. **Start the DDEV servers**
<br />

```ddev start```
---
11. **Start the Vite servers**
<br />

```make dev```
---
12. **Navigate to https://{the-project-name}.ddev.site or https://{the-project-name}.ddev.site/admin**


## Credits
Forked from https://github.com/thomasbendl/craft4-ddev-vite-blueprint