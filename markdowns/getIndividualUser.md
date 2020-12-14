## Get Individual User

Retrieves a single depending on the USer ID

URL: `/api/v1/users/:userID`

Method: `GET`

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
{
    "Result": {
        "data": [
            {
                "address": {
                    "street": "New York St",
                    "city": "Coventry",
                    "county": "West Midlands",
                    "postalCode": "CV12JE",
                    "doorNo": "15"
                },
                "admin": true,
                "properties": [
                    "5fc97b556aad001aa043a051",
                    "5fc97ba36aad001aa043a053",
                    "5fc97caf6aad001aa043a054"
                ],
                "_id": "5fc97afe6aad001aa043a050",
                "firstName": "Raze",
                "lastName": "Nola",
                "phoneNo": "08983489843",
                "email": "omen@gmail.com",
                "password": "$2b$10$AGUpd4azzmfLNKobyIc3MeTnIudYyQFCuJLQIMzmM3TuYGT3Zu0t.",
                "date": "2020-12-03T23:55:42.376Z",
                "__v": 5
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
               



