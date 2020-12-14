## Delete Message

Deletes the selected message

URL: `/api/v1/messages/:messageID`

Method: `DELETE`

Authentication Required: `True`

Admin Only: `False`

URL Params: 
``` javascript
["messageID"]
```

Data Params: `None`

Data Example: `None`

### Success Response

Code: `200 OK`

Content Example:
```javascript
{"Message": "Your message has been deleted"}
```

### Failure Response

Code: `401 Unauthorized || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Unauthorized": "Please log in to access this route"} || 
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



