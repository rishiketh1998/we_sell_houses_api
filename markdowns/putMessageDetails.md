## Update Message Details

Route to allow users to update message details

URL: `/api/v1/messages/:messageID`

Method: `PUT`

Authentication Required: `True`

Admin Only: `False`

URL Params: `["messageID"]`

Data Params: 
```javascript
 {
       "message": ["valid message"],
       "email": ["valid email"],
       "messageStatus": ["valid message status"]
   }
```

Data Example: 
```javascript
    {    
          "message": "Besutiful Proeprty",
    }
```

### Success Response

Code: `200 OK`

Content Example:
```javascript
    {"Message": "You have successfully updated the message."}
```

### Failure Response

Code: `400 Bad Request || 401 Unauthorized || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Unauthorized": "Please log in to access this route"} || 
 {"Error": "'firstName' is required"} ||
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



