const express = require('express');

const server = express();

const handleAllTypesofRequests = (req, res) => {
    res.send("Response from server.use");
} 
const handleLoginGetRequest = (req, res) => {
    res.send("Response from login request");
} 

const handleProfilePutRequestType = (req, res) => {
    res.send('Responded to profile request with method of value put');
}

const middlewarefunction = (req, res, next) => {
    //console.log(req);
    next();
}
const loginRouteSpecifiMiddleware = (req, res, next) => {
    console.log('login route middleware executed');
    next();
}
//middlewares
//server.use(middlewarefunction);

//routes
server.post('/profile', handleAllTypesofRequests);
server.get('/login', loginRouteSpecifiMiddleware, handleLoginGetRequest);
server.put('/profile', handleProfilePutRequestType);
server.get('/signup', (req, res) => res.send('Hello this is the signup for get method'));
server.post('/signin', (req, res) => res.send('This is the signin for post method'));

server.listen(3000, ()=> console.log('server is ready'));