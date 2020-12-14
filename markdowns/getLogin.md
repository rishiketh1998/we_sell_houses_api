## Login

Verifies whether the user's Logged in or not.

URL: `/api/v1/login`

Method: `GET`

Authentication Required: `True`

Admin Only: `False`

URL Params: `None`

Data Params: `None`

Data Example: `None`

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

Code: `401 Unauthorized || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Unauthorized": "Please log in to access this route"} || 
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



