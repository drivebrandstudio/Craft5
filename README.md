
##### Last reviewed 8/21/2024

# Drive Brand Studio CraftCMS v5 template
### Acknowledgments
- https://github.com/CreateSean/craft-starter

### Features
- Live preview
- Revalidate Front End data on save in CraftCMS

### Contributor & Developer Resources & Guides
   - Docker to containerize shizz 🐳 — [Docker Installation](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
   - DDEV to build our Docker servers for us 🤓 — [DDEV Installation](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script)
   - Composer to manage php packages 🎼 — [Composer](https://getcomposer.org/doc/)
   - CraftCMS for managing content 📝 — [CraftCMS](https://craftcms.com/docs/)
   - .env 🦺 — [.env](https://www.dotenv.org/docs)
   - Node V18+, I recommend using NVM to install and manage — [NVM]([https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating))

## Requirements
1. Computer with MINIMUM 8gb RAM, modern OS (so Windows, Linux or Mac) 
1. NodeJS version 18+
2. Ubuntu
3. PHP 8.1+
4. DDEV
5. Docker

## Steps 
1. Use the scaffold to start a templated github repo
1. Add empty .env file to the root of the project (next to .env.example)
1. Add CRAFT_ENVIRONMENT=dev
2. Change web > .htaccess_dev into .htaccess (or prod if you are putting this on your production server)
1. Configure the project
     ```shell
     ddev config
     ```
1. Start the DB server
     ```shell
     ddev start
     ```
1. In .ddev > apache > apache-site.conf
   2. Delete `#DDEV-generated`
   2. Copy contents of .htaccess_dev and paste outside of the <VirtualHost> tags
5. Install necessary packages
   ```shell
   ddev composer install
   ```
5. Install craft
   ```shell
   ddev --import-db --file=starter.sql.gz
   ```
5. Configure craft
   ```shell
   ddev launch
   ```
8. In the GraphQL tab, select Schemas and in the Private Schema, select all checkboxes.
9. Then, select the Tokens tab and create a new token. Name it something like 'Private'.
10. Copy that token and paste it into L57 in index.tsx for `Authorization: "Bearer [PUT_IT_HERE]"`. When you copy with CraftCMS's copy button, you get the whole line. You only need the token value after `Bearer`.
11. Create a FileSystem for asset uploads and Assets, but make sure to name the path ANYTHING OTHER THAN ASSETS
       1. `(For example, if you have an assets/ folder, that would conflict with the /assets page in the control panel.)`
          ![image](https://github.com/user-attachments/assets/6f1f6579-442e-4213-8a35-cb1dc88b1707)
          ![image](https://github.com/user-attachments/assets/509fcf48-d478-4733-90ce-eddabd093cd1)



## Repository Structure
   `/.ddev/` — We utilize DDEV to handle self-hosting of the dev environment. </br>
   `/config/` — CraftCMS config. This should be mostly left alone.    </br>
   `/web/` — Generated minified documents for the website, as well as local assets  <br />
    `/modules/` — Custom CraftCMS logic (contains Revalidation)
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


