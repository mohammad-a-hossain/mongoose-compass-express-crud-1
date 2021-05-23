# part 1
---
1. package set up 
2. install express ,nodemon,mongoose(npm add mongoose
3. app initialization,add middleware, port set, default errorHandler function set
4. make database connection with mongoose
5. declare routes for todo application
---
# part 2 ODM (object data modeling/mapping)
1. _making a folder for route handler_ *
2. _making a folder for todo schema_*
3. _making all rout path in todohandler.js_
4. _making a schema in todo schema and export to todohandler for implementation a modal_
5. _making a Todo model in todoHandler.js_
 
 # part 3 using postman

 
 ---
 1. **insert a post** using postman 
 2. **open mongodb compass to see the data**
 3. **insert multiple data into the database**
 4. **update a data**
 5. **get s single todo**
 6. **get multiple todo**
 7. **delete single data**
 8. **delete multiple data**

 ---
 crud end
 ---
 # part 4 additional feature
 ---
 **using instance method , static, query helper**

 ---
 # part 5 -Jason Web Token authorization details list
 1. _making a userSchema and a separate schema file inside todoSchema folder_
 2. _make a userHandler file in routeHandler folder_
 3. _make user schema in userSchema js file and export_
 4. _make userHander router in index.js and user and import from routeHander_
 5. _install bcrypt for password encrypt and hashing function_ (npm install bcrypt)
 6. _make userHandler all router set up in userHandler.js_
 7.  _set up sign-up router_
 8. _set up login router_ ans authenticaton token set up
 9. _creating json web token_ install >>>> npm add jsonwebtoken
 10. _set jwt secret key in .env file_ and use
 11. _install dotenv for middleware_ >> npm add dotenv
 12. _import dotenv index.js and make config
 13. _generate a token in login router_
 14. _route protection set up by middleware make another folder middleware checklogin.js_

 15. _import checklogin and set in userHandler a protect for routers_

 --Nb: while login there is a token created instance and it validation 
 if i want to post or get data by chcklogin i need to get token which will set in header authentication : Bearer token
 then i can access 
 -- special thanks to Sumit Saha 







