
# Craft CMS Dev Environment  

Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

PLEASE CHECK OUT THE [GITHUB WIKI](https://github.com/drivebrandstudio/Craft4-Scaffolding/wiki/Troubleshooting) FOR TROUBLESHOOTING

## Requirements

- Ubuntu: install through the windows store.
*From an ADMIN V5 powershell terminal, set Ubuntu to run wsl2 with:*  

    ```PowerShell
    wsl --set-version Ubuntu 2
    ```

- [Docker](https://www.docker.com)
- [DDEV](https://ddev.com)
- NodeJS version 14+, I recommend using [NVM](https://github.com/nvm-sh/nvm) if using Windows

## Steps

**I recommend following [DDEV's instructions](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#windows
) on installing Docker and Ubuntu. Their docs are very detailed while not being too verbose**

1. **Note the `./` at the end of the clone script**

    - SSH (preferred):

    ```shell
    git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./
    ```

    - HTTPS:

    ```shell
    git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./
    ```  

1. **Initialize with a new repository:**
   ```shell
   git remote set-url origin https://github.com/OWNER/REPOSITORY.git
   ```

1. **Verify remote has been updated**

   ```shell
   git remote -v
   ```

1. **Run npm install:**  

   ```shell
   npm install
   ```

1. **Allow DDEV to configure the project**
   ```shell
   ddev config
   ```
   *This will probably require certain php extentions to be enabled. Find the php.ini file on your system with*:
   ```shell
   php --ini
   ```
   *Then make sure you have admin privileges with*
   ```shell
   sudo nano {path to php.ini}
   ```
   *and remove the* `;` *before the needed ext*

1. **Update package.json**

    - project name (Must follow [NPM package naming convention](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name))
    - author
    - description
    - etc

1. **Run make dev**

   ```shell
   make dev
   ```

1. **Navigate to <https://{the-project-name}.ddev.site> or <https://{the-project-name}.ddev.site/admin>**

If you land on a page with server errors or an if(!hasCraftInstalled) then you are on the right track. Now check your .htaccess file and .env (make sure you have your database hooked into ddev correctly)
