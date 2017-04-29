SAD individual assignement Marcus Ritter - M11004061, 29.04.2017


# New York City Restaurant Guide

This is a simple MEAN Stack application that allows a user to search for different types of restaurants in NYC. Additionally a user can add new restaurants to the guide, update existing entries and delete old entries if a restaurant does not exist anymore. The application supports a basic CRUD REST API for the restaurants entity.

## Installation

1. Install Git
2. Clone Repository with Git
3. Install MongoDB
4. Install Node.js

##### MongoDB

The database for the project is included in the repository in the folder *data/db*, as well as the log files *data/logs*. A configuration file for the test database is included as well *data/mongod.cfg*. After installation of MongoDB copy the configuration file to the installation directory *./MongoDB/Server/3.4/mongod.cfg*. Now you need to start mongod with the right database path. After that you can connect with mongo client for testing purposes.

1. cd C:\Program Files\MongoDB\Server\3.4\bin
2. mongod --dbpath "C:\Users\Username\git\sad-2017-sw-01-M11004061\data\db"
3. mongo

Optionally you can also install MongoDB as a service using the included configuration file: *sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\3.4\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"*. And run it afterwards with: *net start MongoDB*. Commands and steps for installing MongoDB are also included in *data/mongodb_help.txt*.

##### Node.js

Just install Node.js and navigate to the project directory and start *server.js* to run the application (assuming the database is already running in the background). No additional node libraries need to be installed, they are all included in the project. If everything is running the application can be accesses under **localhost:3000** and the crud rest api with **localhost:3000/api/restaurants**.

## Testing

The CRUD REST API for the restaurants was tested using postman. The postman test result as well as the test itself is included in the repository under *postman_crud_rest_api_test*. The following screen shots show that the CRUD REST API is working properly for the restaurants.

##### GET, fetch all restaurants

![postman test image 1](https://github.com/infomediadesign/sad-2017-sw-01-M11004061/blob/master/postman_crud_rest_api_test/postman_api_test_get_all.png)

##### GET, fetch single restaurant
![postman test image 2](https://github.com/infomediadesign/sad-2017-sw-01-M11004061/blob/master/postman_crud_rest_api_test/postman_api_test_get_single.png)

##### POST, save restaurant
![postman test image 3](https://github.com/infomediadesign/sad-2017-sw-01-M11004061/blob/master/postman_crud_rest_api_test/postman_api_test_save.png)

##### DELETE, delete restaurant
![postman test image 4](https://github.com/infomediadesign/sad-2017-sw-01-M11004061/blob/master/postman_crud_rest_api_test/postman_api_test_delete.png)

##### PUT, update restaurant
![postman test image 5](https://github.com/infomediadesign/sad-2017-sw-01-M11004061/blob/master/postman_crud_rest_api_test/postman_api_test_update.png)
