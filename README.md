# Craft CMS Dev Environment
Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

## Requirements
-   Ubuntu, install through the windows store
    *Also set Ubuntu to run wsl2 with* `wsl --set-version Ubuntu 2` *from an admin powershell 5 terminal*
-   Docker, https://www.docker.com
-   DDEV, https://ddev.com

## Steps
**I recommend following DDEV's instructions on installing Docker and Ubuntu. Their docs are very detailed while not being too verbose**
https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#windows 

---
1. **Note the `./` at the end of the clone script**
- HTTPS: `git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./`
or
- SSH: `git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./`
---
2. **Remove link to scaffolding git repo**
`rm -rf .git`
---
3. **Initialize with a new repository**
`git init`
---
3. **Allow DDEV to configure the project**
`ddev config`
*This will probably require certain php extentions to be enabled. Find the php.ini file on your system with*: `php --ini`
*Then make sure you have admin privileges with* `sudo nano {path to php.ini}` *and remove the* `;` *before the needed ext*   
---
4. **Check .ddev > config.yaml to see if**:
- The php_version is 8.1
- Database type is mariadb and v10.4
- webserver_type is nginx-fpm
-`webimage_extra_packages: [gconf-service, libasound2, libatk1.0-0, libcairo2, libgconf-2-4, libgdk-pixbuf2.0-0, libgtk-3-0, libnspr4, libpango-1.0-0, libpangocairo-1.0-0, libx11-xcb1, libxcomposite1, libxcursor1, libxdamage1, libxfixes3, libxi6, libxrandr2, libxrender1, libxss1, libxtst6, fonts-liberation, libnss3, xdg-utils]`
---
5. **Update package.json**
- project name
- author
- etc
---
6. **Run composer to fetch initial dependencies**
`composer install`
---
7. **Run make to handle remaining DDEV commands**
`make install`
---
8. **Start the DDEV servers**
`ddev start`
---
9. **Start the Vite servers**
`make dev`
---
10. **Navigate to https://{the-project-name}.ddev.site or https://{the-project-name}.ddev.site/admin**

If you land on a page with server errors or an if(!hasCraftInstalled) then you are on the right track. Now check your .htaccess file and .env (make sure you have your database hooked into ddev correctly)