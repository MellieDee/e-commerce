# **<center>cCommerce Back End</center>**

**<center>FEATURES</center>**

<center><img src="https://img.shields.io/badge/-Node-green.svg">    <img src="https://img.shields.io/badge/-Dotenv-yellow.svg">  <img src="https://img.shields.io/badge/-Express-grey.svg">    <img src="https://img.shields.io/badge/-MySql/MySql2-purple.svg">   <img src="https://img.shields.io/badge/-Sequelize-blue.svg">     </br><img src="https://img.shields.io/badge/license-MIT-blue.svg"></center>

&nbsp;

## **Project Description**

---

Back end code for a sample eCommerce website using Express, node & Sequelize.

&nbsp;

## Table of Contents

---

- [Installation](#installation)
- [Usage](#usage)
- [URL](#url)
- [Screenshot](#screenshot)
- [Contributing](#contributing)
- [Tests](#tests)
- [Resources](#resources)
- [Questions](#questions)
- [License](#license)

&nbsp;

## **Installation**

---

See package.json for dependencies and other details.

Code to local directory: `git clone`</br>

From command line npm install the following: `npm install`</br>

- Node (if not already on your system)
- Dotenv
- Express
- MySql/MySql2
- Sequelize
  &nbsp;

`mysql -u <username> -p`</br>
If need to re-seed the database ~</br>
From the command-line, run the above mysql command to start mysql. Follow prompts</br>
Database is ecommerce_db</br>

In mySql command-line shell -
`source db/schema.sql`
`exit` or `quit`</br>
Then from code editor -
Confirm sequelize.sync force is set to true in server.js & seeds/index.js. </br>
Run `node seeds/index.js` to seed</br>

Immediately change force to false in both files
Run `node server` to start

&nbsp;

## **Usage**

---

This program will allow users to create, view, update and delete Products, Categories and Tags.</br>
Since this is the back end, it is not deployed. Use Heroku to see sample functionality by entering the various paths (see Heroku walkthrough video.)</br>Stop the server with command-line shortcuts.

&nbsp;

## **URL**

---

Does not have a deployment URL.
[eCommerce run through on YouTube](https://youtu.be/ZxoK9hW8Xb4)

&nbsp;

## **Screenshot**

---

<img src="assets/images/screenShot.png" width="350" height="275" alt="Screenshot of GET all Products on Heroku.">

&nbsp;

### **Contributing**

---

Not accepting contributors.

&nbsp;

### **Tests**

---

No tests at this time.
&nbsp;

### **Resources**

---

#### I Used or Was Inspired By

https://levelup.gitconnected.com/table-relationships-in-sequelize-2e2533580c2a

https://newbedev.com/how-does-sequelize-sync-work-specifically-the-force-option

https://sequelize.org/master/manual/advanced-many-to-many.html

https://sequelize.org/master/manual/model-querying-basics.html

https://stackoverflow.com/questions/20460270/how-to-make-join-queries-using-sequelize-on-node-js
&nbsp;

### **Questions**

---

✉️ Reach me directly at melliedeedevelops@outlook.com </br>  
Or checkout out my GitHub profile: [github.com/MellieDee](https://github.com/MellieDee)

&nbsp;

### **License**

---

Copyright (c) Melanie Dubberley.

Licensed under the [MIT](https://choosealicense.com/licenses) license.
<img src="https://img.shields.io/badge/license-MIT-blue.svg">
&nbsp;

##### Return to:

---

- [Installation](#installation)
- [Usage](#usage)
- [URL](#url)
- [Screenshot](#screenshot)
- [Contributing](#contributing)
- [Tests](#tests)
- [Resources](#resources)
- [Questions](#questions)
- [License](#license)

&nbsp;
