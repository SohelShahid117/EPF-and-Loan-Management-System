1.Authentication
2.Dashboard
3.Employee Management
4.Dept Management
5.Salary Management
6.Leave Management
7.Setting

Required:
//frontend:
1.npm create vite@latest--->https://tailwindcss.com/docs/guides/vite
2.npm install react-router-dom tailwindcss axios react-icons 
3.npm install react-data-table-component styled-component postcss
4.npm install autoprefixer
//learning about:react-data-table-component styled-component postcss autoprefixer

//backend
***create folder inside folder:server-->https://expressjs.com/en/starter/installing.html
1.npm init -y
2.npm install bcrypt cors express jsonwebtoken mongoose multer nodemon path
//learning:bcrypt,multer nodemon path dotenv
3.create index.js file
//https://expressjs.com/en/starter/hello-world.html

***add to package.json
1.type module-->start nodemon index.js
or
2.start nodemon --env-file=.env index.js
create .env file
3."scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --env-file=.env index.js"
  },
4.during connect to database run this file as:$node --env-file=.env userSeed.js,
add "type": "module" in the package.json & // require('dotenv').config() not required
5.run server--->npm run start

frontend:
1.run frontend--->npm run dev