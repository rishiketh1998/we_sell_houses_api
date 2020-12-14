## Login

Logs in user and issues a token for the user.

URL: `/api/v1/login`

Method: `POST`

Authentication Required: `False`

Admin Only: `False`

URL Params: `None`

Data Params: 
```javascript
{ email: ["valid email", required], password: ["valid password", required] }`
```

Data Example: 
```javascript
{ email: "omen@gmail.com", password: "Qwerty1@" }`
```

### Success Response

Code: `200 OK`

Content Example:
```javascript
  {
      "Message": "You have successfully logged in.",
      "Data": {
          "_id": "5fc97afe6aad001aa043a050",
          "firstName": "Raze",
          "lastName": "Nola",
          "email": "omen@gmail.com",
          "phoneNo": "08983489843",
          "admin": false
      }
  }  
```

### Failure Response

Code: `403 Forbidden || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Error": "Request denied, please enter a valid email and password"} || 
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



