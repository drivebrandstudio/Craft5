
# Drive Brand Studio CraftCMS V4 template
### Last reviewed 4/1/2024
### Check out the 'with-tailwind' branch for muuuuuch more than just tailwind! (React frontend, aceternity components, graphQL for middleware, still using Craftcms)

# If you run into any issues while following these steps, please make an issue against this Template Repo :D 

## Front and Back ends
   - Front end in twig
   - Back end in CraftCMS
## Repository Structure
   `/.ddev/` — We utilize DDEV to handle self-hosting of the dev environment. </br>
   `/config/` — CraftCMS config. This should be mostly left alone.    </br>
   `/src/` — Un-minified JS and CSS files </br>
   `/templates/` — Source code for our front-end, written in Twig. </br>
   `/web/` — the folder containing the generated minified documents for the website, as well as local assets (images, videos, etc) that are stored on the webserver (preferably, store them somewhere where storage is cheaper and make a network request to fetch I.E. put a video on youtube instead of in here)

## Contributor & Developer Resources & Guides
   - Docker to containerize shizz 🐳 — [Docker Installation](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
   - DDEV to build our Docker servers for us 🤓 — [DDEV Installation](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script)
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
   - DBS Twig template folder structuring is inspired by the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). We rename these primatives to fit into the CraftCMS /templates/ folder structer of:
        <pre>
            templates
            ├── 404.twig
            ├── _components  -- ATOMS
            ├── _includes   -- MOLECULES
            │   ├── background.twig
            │   ├── bodyEnd.twig
            │   ├── footer.twig
            │   ├── head.twig
            │   ├── header.twig
            │   └── socials.twig
            ├── _layouts   -- TEMPLATES/PAGES
            │   ├── _entrytype
            │   │   ├── [some_entry_type].twig
            │   │   ├── .....
            │   ├── base.twig
            │   └── ....
            ├── error.twig  -- Craft Error Boundary
            └── index.twig  -- App entry point
        </pre>
        Aligning Designers and Developers is a good way to make groovy stuff quickly :D
   - Prettier works (most of the time), so format on save
   - We have no linter yet 😬
   - Follow 'prior art' by referencing existing code within the codebase   

## Requirements
1. Computer with MINIMUM 8gb RAM, modern OS (so Windows, Linux or Mac) 
1. NodeJS version 14+
2. Ubuntu
3. PHP 8.1+
4. DDEV
5. Docker

## Steps 
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


1. Add empty .env file to the root of the project (next to .env.example)
2. Change web > .htaccess_dev into .htaccess (or prod if you are putting this on your production server)
3. Update package.json, make this project truly your own

    - Project name — must adhere to the [rules of npm](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name)
    - author
    - description
1. Configure the project with DDEV
     ```shell
     make setup
     ```
1. Run the project with
     ```shell
      make dev
     ```
   *If successful, your terminal should be taken over by the vite server. Split your terminal window, or open a new terminal to continue. Must leave Vite server running to view the local dev site*
   <details>
      <summary>Problem?</summary>
       This may take a few minutes. Let the terminal run.

   If nothing is happening after 5 minutes (which feels like a very long time...), CTRL+C in the terminal that is locked up, then try running

   ```shell
   ddev poweroff
   ```
   and re-running
      ```shell
   make setup
   ```
   </details>
  

5. Allow DDEV to open the browser, so split your vscode terminal
   ```shell
   ddev launch
   ```

6. Navigate to /admin in the new web browser. If you land on a page with server errors or an if(!hasCraftInstalled) then you are on the right track. Now check your .htaccess file and .env (make sure you have your database hooked into ddev correctly)

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

## Known pitfalls
1. to be explored more.....

