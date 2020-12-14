## Get Property Messages

Retrieves all the messages for an individual property 

URL: `/api/v1/properties/:propertyID/messages`

Method: `GET`

Authentication Required: `True`

Admin Only: `False`

URL Params: 
``` javascript
["propertyID"}]
```

Data Params: `None`

Data Example: `None`

### Success Response

Code: `200 OK`

Content Example:
```javascript
{
    "Result": {
        "data": [
            {
                "messageStatus": "unread",
                "_id": "5fce2885c3cd77132464a159",
                "message": "Nice Property",
                "email": "nice@gmail.com",
                "propertyID": "5fc97b556aad001aa043a051",
                "__v": 0
            }
        ]
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
               



