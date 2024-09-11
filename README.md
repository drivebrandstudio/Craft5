
##### Last reviewed 9/10/2024

# Drive Brand Studio CraftCMS v5 template
## Requirements
1. Computer with MINIMUM 8gb RAM, modern OS (so Windows, Linux or Mac) 
1. NodeJS v18+
2. Ubuntu v22.04
3. PHP 8.1+
4. DDEV
5. Docker


## Steps 
1. Add empty .env file to the root of the project (next to .env.example)
1. Add CRAFT_ENVIRONMENT=dev to the .env
2. Change web > .htaccess_dev into .htaccess (or prod if you are putting this on your production server)
1. Configure the project with ```ddev config```
1. Start the DB server with ```ddev start```
5. Install necessary packages with  ```ddev composer install```
5. Install craft with  ```ddev --import-db --file=starter.sql.gz```
5. Configure craft with  ```ddev craft setup```
1. Launch craft with  ```ddev launch```
8. In the GraphQL tab:
    - Select Schemas and in the Private Schema, make sure all checkboxes are checked.
    - Then, select the Tokens tab and create a new token. Name it something like 'Private' and copy only the token value after `Bearer`.
11. Create a FileSystem for asset uploads and Assets, but make sure to name the path ANYTHING OTHER THAN ASSETS

 `(For example, if you have an assets/ folder, that would conflict with the /assets page in the control panel.)`
          ![image](https://github.com/user-attachments/assets/6f1f6579-442e-4213-8a35-cb1dc88b1707)
          ![image](https://github.com/user-attachments/assets/509fcf48-d478-4733-90ce-eddabd093cd1)



### Acknowledgments
- [CreateSean](https://github.com/CreateSean/craft-starter)
### Features
- Live preview
- Revalidate Front End data on save of Entries / Categories / Globals
- SEO optimization
### Contributor & Developer Resources & Guides
   - Docker 🐳 — [Docker Installation](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
   - DDEV 🤓 — [DDEV Installation](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script)
   - Composer 🎼 — [Composer](https://getcomposer.org/doc/)
   - CraftCMS 📝 — [CraftCMS](https://craftcms.com/docs/)
   - .env 🦺 — [.env](https://www.dotenv.org/docs)
   - Node V18+, I recommend using NVM to install and manage — [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
