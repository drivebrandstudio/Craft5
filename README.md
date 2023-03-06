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
-`webimage_extra_packages: [gconf-service, libasound2, libatk1.0-0, libcairo2, libgconf-2-4, libgdk-pixbuf2.0-0, libgtk-3-0, libnspr4, libpango-1.0-0, libpangocairo-1.0-0, libx11-xcb1, libxcomposite1, libxcursor1, libxdamage1, libxfixes3, libxi6, libxrandr2, libxrender1, libxss1, libxtst6, fonts-liberation, libnss3, xdg-utils]`
---
5. **Update package.json**
- information such as
- project name
- author
- etc
---
6. **Update package.json information such as project name, author, etc**
---
7. **Run composer to fetch initial dependencies**
`composer install`
---
8. **Run make to handle remaining DDEV commands**
`make install`
---
9. **Start the DDEV servers**
`ddev start`
---
10. **Start the Vite servers**
`make dev`
---
11. **Navigate to https://{the-project-name}.ddev.site or https://{the-project-name}.ddev.site/admin**