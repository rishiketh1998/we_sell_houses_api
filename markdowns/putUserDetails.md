## Update User Details

Route to allow users to update their personal details

URL: `/api/v1/users/:userID`

Method: `PUT`

Authentication Required: `True`

Admin Only: `False`

URL Params: `["userID"]`

Data Params: 
```javascript
    {     
          "firstName": ["valid firstname"],
          "lastName": ["valid lastName"],
          "email": ["valid email"],
          "password": ["valid password"],
          "phoneNo": ["valid phoneNo"],
          "profileImg": ["valid image url"],
          "address": {
              "doorNo": ["valid doorNo"],
              "city": ["valid city"],
              "street": ["valid street"],
              "postalCode": ["valid postalCode"]
          }
    }
```

Data Example: 
```javascript
    {    
          "firstName": "Skye",
          "lastName": "Brim",
          "email": "skye@gmail.com",
          "password": "Rishiketh1@",
          "phoneNo": "07708436008",
    }
```

### Success Response

Code: `200 OK`

Content Example:
```javascript
      { "Message": "You have successfully updated your account." }
```

### Failure Response

Code: `400 Bad Request || 401 Unauthorized || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Unauthorized": "Please log in to access this route"} ||
 {"Error": "Email entered is already registered."} || 
 {"Error": "'firstName' is required"} ||
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



