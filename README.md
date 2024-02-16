
# Drive Brand Studio CraftCMS V4 template

## Repository Structure
   `/.ddev/` — We utilize DDev to handle self-hosting of the dev environment. </br>
   `/config/` — Craft config. This should be mostly left alone.    </br>
   `/src/` — Un-minified JS and CSS files </br>
   `/templates/` — Source code for our front-end, written in Twig. </br>
   `/web/` — the folder containing the generated minified documents for the website, as well as local assets (images, videos, etc) that are stored on the webserver (preferably, store them somewhere where storage is cheaper and make a network request to fetch I.E. put a video on youtube instead of in here)

## Contributor & Developer Resources & Guides
   - Docker to containerize shizz 🐳 — [Docker Installation](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
   - DDEV to build our servers for us 🤓 — [DDEV Installation](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script)
   - Vite to bundle up our code ⚡ — [VITE](https://vitejs.dev/)
   - Twig as our templating engine 🏎️ — [Twig PHP](https://twig.symfony.com/doc/3.x/)
   - Sass — [SCSS](https://sass-lang.com/documentation/syntax/)
   - Javascript 🤮 — [Mozilla's Excellent JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
   - NPM for managing Node packages 📦 — [NPM](https://docs.npmjs.com/cli/v9)
   - Composer to manage php packages 🎼 — [Composer](https://getcomposer.org/doc/)
   - MakeFile for easily running bulk scripts 🚚 — [MakeFile](https://www.gnu.org/software/make/manual/make.html)
   - CraftCMS for managing content 📝 — [CraftCMS](https://craftcms.com/docs/)
   - .env 🦺 — [.env](https://www.dotenv.org/docs)
   - Prettier... But be warned 🧹 — [prettier](https://prettier.io/)
   - Prettier Plugin by Melody  — [prettier-plugin-twig-melody](https://github.com/trivago/prettier-plugin-twig-melody?tab=readme-ov-file#install)
   - Node V14+, I recommend using NVM to install and manage — [NVM]([https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating))


## Style Guide
   - DBS Twig template folder structuring is inspired by the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).
   - Prettier works (most of the time), so format on save
   - We have no linter yet 😬
   - Follow 'prior art' by referencing existing code within the codebase   


## Requirements
**I recommend following [DDEV's instructions](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script) on installing Ubuntu and Docker. Their docs are very detailed while not being too verbose**
1. NodeJS version 14+, I recommend using [NVM]([https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)) if using Windows
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


1. Add .env file
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
   <details>
      <summary>Problem?</summary>
       This may take a few minutes. Let the terminal run.

   If nothing is happening after 5 minutes (which feels like a very long time...), try running

   ```shell
   ddev poweroff
   ```
   and re-running
      ```shell
   make dev
   ```
   </details>
  

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

