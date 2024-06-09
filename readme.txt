taliwind css via CDN --> tailblocks(templates of websites) --> Source Unsplash(Random images generator, after ques mark write down the title of website for related photos) --> 

npm init -y 
npm install express
npm i hbs (handlebars)
npm i nodemon
Changes in scripts in package.json
then npm run dev
npm install mongoose 

ExpressJs is a Node.Js framework,a web application framework that provides us with the simple Api to build the websites, web apps and backends. Important as it helps to create the REST API server 5-10x times faster than the Node.JS. For more insights into the express, refer: 
https://expressjs.com/ 

Partials are just like the components in React, and are used to render the dynamic components within the website. Things like header, footer, etc which are common to every page, can be easily rendered through partials. Common things included in the partials folder and in the index.js file, these partials are registered by hbs.registerPartials(partialsPath);

Adding 404 error page
* is the operator when any non existing path is entered, that path gets matched through this operator. This needs to be at the bottom as the compiler executes the code lineby line, so if none of the links matched then this part will get executed

----------------------------------------------------------------------------------------------------
Starting MongoDB;
SQL (MySQL) - Works on RDBMS, Relataional Database. Stores data in form of tables. Uses SQL to query Database. Table -> Row -> Column

NoSQL(MongoDB) - Works on Non Relational, docuument Database. Stores data in form of document. Uses BSON stands for binary JSON(Binary Representation to store JSON data to increase the speed, space and flexibility) to query Database. Collection -> document -> Fields. Stored in form of key value pair.

https://www.mongodb.com/docs/manual/crud/
Few commands include:
1. show dbs
2. use WebD(WebD, name od database)
3. show collections
4. db.Developer.find()  (Developer, name of the collection in database)This fn provides all Fields
This find methid has some certain queries to perform.
5. 

----------------------------------------------------------------------------------------------------
REST API
async - Keyword added to the functions to tell them to return the promise rather than to return the value.
await - We can use await in any function that returns the promise including the web API functions. Await makes the JS wait until that promise settles and returns the result, 

routes and controllers folder, under which products.js file. Routes and Controllers setup using the ExpressJs

Using Postman to test APIs

----------------------------------------------------------------------------------------------------

Using Mongoose, we can establish the connection between NodeJs and MongoDB. Basically the framework of MongoDb. It manages relationships between the data and provides the schema validation
1. Require the mongoose, add the promises and then catch the error if any
2. Schema: Schema defines the structure of the document and is used to add the validators, default values etc. Considered like if boolean and add the value of string datatype then by acting as a validator it generates the error as boolean can only contain true or false. To define the schema, just mention the data type infront of all the keys present in the databses. Defines schema through camel case 
3. Models : It is the wrapper on the mongoose schema and is just the interface to the database for creating , querying, updating and deleting records etc. Creating models implies creating the collections. Define model through Pascal case.
4. To insert the multipe document in the collections using  async , await
5. Querying the documents and operations like sorting, etc can be performed easily.
6. Built in Validation 
----------------------------------------------------------------------------------------------------
Building registration and signup form 
1. Creating db and models folder inside src 
2. Connect the local express server with the mongo db
3. Now defien the schemas in the models folder
4. 