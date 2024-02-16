
# Drive Brand Studio startup guide (specifically for windows PCs)

## Repository Structure
- /.ddev/ — We utilize DDev to handle self-hosting of the dev environment.
- /config/ — Craft config. This should be mostly left alone.
- /src/ — Un-minified JS and CSS files
- /templates/ — Source code for our front-end, written in Twig.
- /web/ — the folder containing the generated minified documents for the website, as well as local assets (images, videos, etc) that are stored on the webserver (preferably, store them somewhere where storage is cheaper and make a network request to fetch I.E. put a video on youtube instead of in here)

## Contributor & Developer Resources & Guides
   - [Docker Installation](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
   - [DDEV Installation](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script)
   - [VITE](https://vitejs.dev/)
   - [Twig PHP](https://twig.symfony.com/doc/3.x/)
   - [SCSS](https://sass-lang.com/documentation/syntax/)
   - [Mozilla's Excellent JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
   - [NPM](https://docs.npmjs.com/cli/v9)
   - [Composer](https://getcomposer.org/doc/)
   - [MakeFile](https://www.gnu.org/software/make/manual/make.html)
   - [CraftCMS](https://craftcms.com/docs/)
   - [.env](https://www.dotenv.org/docs)
   - [prettier BUT BE WARNED](https://prettier.io/)
   - [prettier-plugin-twig-melody](https://github.com/trivago/prettier-plugin-twig-melody?tab=readme-ov-file#install)

## Relevant Documentation

## Source Control Policy

## Style Guide
   - DBS Twig template folder structuring is inspired by the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).
   - Prettier works (most of the time), so format on save
   - We have no linter yet 😬
   - Follow 'prior art' by referencing existing code within the codebase   


## Requirements
**I recommend following [DDEV's instructions](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script) on installing Ubuntu and Docker. Their docs are very detailed while not being too verbose**
1. NodeJS version 14+, I recommend using [NVM](https://github.com/nvm-sh/nvm) if using Windows
2. Ubuntu with all necessary php packages
3. DDEV
4. Docker
5. An IDE ([VSCode](https://code.visualstudio.com/Download) or [PHPStorm](https://www.jetbrains.com/phpstorm/download/#section=windows) are my recomendations)

## Steps to go from nothing locally -> Full-blown website
1. Clone the scaffolding code **OR** use the scaffold to start a templated github repo:

   <details>
      <summary>Creating folder on local computer</summary>
      <p>
      SSH (preferred):
      
      ```shell
         git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./
      ```
      </p>

   <strong>OR</strong>
   <p>
      
      HTTPS:
   
      ```shell
      git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./
      ```
   </p>
         
     
   </details>
   
   
   <details>
      <summary>
         Templated github repo 
      </summary>
      <p>
         Create a github repo using the template and  clone that to your pc
      </p>
   </details>

1.  **Make sure you replace the OWNER/REPOSITORY in the next script with your github repo link**
2.   ```shell
      git remote -v
      ```
     Is it pointing at a github repo you own? No?
   
      ```shell
      git remote set-url origin [https://github.com/OWNER/REPOSITORY.git]
      ```
      and make double sure you're pointing to the correct spot
   
      ```shell
      git remote -v
      ```

1. **Add .env file**
1. **Add .env file**
1. **Add .env file**
1. **Add .env file**
1. **Add .env file**
1. **Add .env file**
1. Did you add it?
1. **Add .env file**
1. **Add .env file**
1. **Add .env file**
1. **Add .env file**

1. Setup craft /config/ files
  ```shell
   ddev exec php craft setup
   ```
3. **Update package.json, make this project truly your own :D**

    - [Project name](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name)
    - author
    - description
    - etc

1. **Allow DDEV and makefile to configure the project**
   ```shell
   make dev
   ```
   This may take a few minutes. Let the terminal run.

   If nothing is happening after 5 minutes (which feels like a very long time...), try running

   ```shell
   ddev poweroff
   ```
   and re-running
      ```shell
   make dev
   ```

5. **Allow DDEV to open the browser, so split your vscode terminal**
   ```shell
   ddev launch
   ```

6. **Navigate to <https://{the-project-name}.ddev.site/admin>**

   If you land on a page with server errors or an if(!hasCraftInstalled) then you are on the right track. Now check your .htaccess file and .env (make sure you have your database hooked into ddev correctly)

## FAQ/Tips
### Errors during install
1. Follow the DDEV instructions slowly and carefully. Read each line all the way through, it's faster than skimming and hitting an error and having to debug...
2. Uninstall Ubuntu (all programs related to Ubuntu: Ubuntu, 'install REALEASE (Ubuntu)', .... )
### Prettier
1. You will need to restart the vscode window from the Command Palette (ctrl+shift+p) 
```shell 
Developer: reload window
```
After the reload, let vscode finish loading and indexing, then attempt to use Prettier

