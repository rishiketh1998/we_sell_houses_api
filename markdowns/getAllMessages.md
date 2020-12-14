## Get all Messages

Retrieves all the users details that is currently listed on the api

URL: `/api/v1/messages`

Method: `GET`

Authentication Required: `True`

Admin Only: `True`

URL Params: 
``` javascript
["page", "limit", "message","email"]
```

Data Params: `None`

Data Example: `None`

### Success Response

Code: `200 OK`

Content Example:
```javascript
{
    "Result": {
        "page": 1,
        "limit": 100,
        "data": [
            {
                "messageStatus": "unread",
                "_id": "5fcb7ef1ac773043004ec0a3",
                "email": "rishiketh1998@gmail.com",
                "message": "I would like to view this property in person \n",
                "propertyID": "5fc97eae6aad001aa043a055",
                "__v": 0
            },
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
               



