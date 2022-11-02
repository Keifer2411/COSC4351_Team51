# COSC4351_Team51
Restaurant Reservation System

RUN

npm install --global yarn
//installs yarn globally

cd restaurant-reservation
//change directory into restaurant-reservation directory

yarn dev
//starts development server, will provide a link to localhost:3000 whee you can see the website


NOTES

Use yarn only, not npm
    - use word yarn before script name (script names are in package.json)

Prefix unused variables with _ otherwise cannot commit/push

VS code extentions to install:
    - Prettier

On windows if debug gives error: vscode listen eacces: permission denied run (in command prompt):
	net stop winnat
	net start winnat


FOR THE FUTURE

use railway to host database

use vercel to deploy

FOLDERS

components - react components
pages - navigatable pages on website
lib - backend stuff (buisiness layer, services, data-access)



REFERENCES

setup: https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7

datbase hosting/app deployment options: https://www.youtube.com/watch?v=prjMJtXCR-g
