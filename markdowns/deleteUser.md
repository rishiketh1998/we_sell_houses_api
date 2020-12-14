## Delete User

Deletes the current users details

URL: `/api/v1/users/:userID`

Method: `DELETE`

Authentication Required: `True`

Admin Only: `False`

URL Params: 
``` javascript
["userID"]
```

Data Params: `None`

Data Example: `None`

### Success Response

Code: `200 OK`

Content Example:
```javascript
{ "Message": "Your account has been deleted" }
```

### Failure Response

Code: `401 Unauthorized || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Unauthorized": "Please log in to access this route"} || 
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



