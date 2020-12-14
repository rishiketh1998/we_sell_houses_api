## Get all Users

Retrieves all the users details that is currently listed on the api

URL: `/api/v1/users`

Method: `GET`

Authentication Required: `True`

Admin Only: `True`

URL Params: 
``` javascript
["page", "limit", "propertyType","location","firstName", "email", "lastName"]
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
                "address": {
                    "street": "172 Trinity View, Friars' Rd, Coventry",
                    "city": "Coventry",
                    "postalCode": "CV12JE",
                    "doorNo": "10A"
                },
                "admin": false,
                "properties": [
                    "5fc97eae6aad001aa043a055",
                    "5fcb860fa895a4329c5a8068",
                    "5fcc2d2194263049b44159b6"
                ],
                "_id": "5fc97ae16aad001aa043a04f",
                "firstName": "Rishiketh",
                "lastName": "Prabhakar",
                "phoneNo": "07708436008",
                "email": "prabhak8@uni.coventry.ac.uk",
                "password": "$2b$10$x45dqVXaPFr2GbAht.kEQOXqh/7r./91ffZNlK6qOKah2BBqswDle",
                "date": "2020-12-03T23:55:13.401Z",
                "__v": 3
            },
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
            },
            {
                "address": {
                    "street": "New York St",
                    "city": "Coventry",
                    "county": "West Midlands",
                    "postalCode": "CV12JE",
                    "doorNo": "15"
                },
                "admin": false,
                "properties": [],
                "_id": "5fc993a3614ec02394c3a851",
                "firstName": "Raze",
                "lastName": "Nola",
                "phoneNo": "08983489843",
                "email": "kishi@gmail.com",
                "password": "$2b$10$Gj2BPLOw3ZAwZ8BPGLE5meDrlYR9nJcUTvW1jTt5gtrFw/C6qThWC",
                "date": "2020-12-04T01:40:51.317Z",
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
               



