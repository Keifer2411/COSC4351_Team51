# COSC4351_Team51
Restaurant Reservation System

RUN

install nodJS from https://nodejs.org/en/download/ if you don't have it

npm install --global yarn
//installs yarn globally

cd restaurant-reservation
//change directory into restaurant-reservation directory

yarn install
//installs all needed dependencies

yarn run dev
//starts development server, will provide a link to localhost:3000 whee you can see the website

npx prisma studio
//shows database in GUI


NOTES

Use yarn only, not npm
    - to run a script use word yarn before script name (script names are in package.json)

Unused variables must be prefixed with _ (eg. _unusedvar) otherwise cannot commit/push

VS code extentions to install:
    - Prettier

On windows if debug gives error: vscode listen eacces: permission denied run (in command prompt):
	net stop winnat
	net start winnat


FOR THE FUTURE

for now using prisma and local sqlite database.db file for database

use vercel to deploy

FOLDERS

components - react components
pages - navigatable pages on website
lib - backend stuff (buisiness layer, services, data-access)
prisma - database ORM


REFERENCES

setup: https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7

datbase hosting/app deployment options: https://www.youtube.com/watch?v=prjMJtXCR-g
