## Add User

Route to add a new user

URL: `/api/v1/users`

Method: `POST`

Authentication Required: `False`

Admin Only: `False`

URL Params: `None`

Data Params: 
```javascript
    {     
          "firstName": ["valid firstname", required],
          "lastName": ["valid lastName", required],
          "email": ["valid email", required],
          "password": ["valid password", required],
          "phoneNo": ["valid phoneNo", required],
          "profileImg": ["valid image url"],
          "address": [{
              "doorNo": ["valid doorNo", required],
              "city": ["valid city", required],
              "street": ["valid street", required],
              "postalCode": ["valid postalCode", required]
          }, required]
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
          "address": {
              "doorNo": "172",
              "city": "Covenrty",
              "street": "Spencer Road",
              "postalCode": "CV256NZ"
          }
    }
```

### Success Response

Code: `201 Created`

Content Example:
```javascript
      { "Message": "You have successfully registered." }
```

### Failure Response

Code: `400 Bad Request || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Error": "Email entered is already registered."} || 
 {"Error": "'firstName' is required"}
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



