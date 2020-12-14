## Get Individual Property

Retrieves all the properties that is currently listed on the api

URL: `/api/v1/properties/:id`

Method: `GET`

Authentication Required: `False`

Admin Only: `False`

URL Params: `["propertyId"]`

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
                "location": {
                    "doorNo": "172",
                    "street": "Friars' Rd, Coventry",
                    "postalCode": "CV12JE",
                    "city": "Coventry",
                    "county": "West Midlands"
                },
                "images": [],
                "underOffer": false,
                "publish": true,
                "description": " Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ",
                "priority": "Normal",
                "features": [
                    "Terrace",
                    "Gym",
                    "Garden"
                ],
                "messages": [],
                "_id": "5fc97b556aad001aa043a051",
                "bedRooms": 3,
                "bathRooms": 2,
                "price": 350000,
                "propertyName": "Trinity View",
                "propertyType": "Flat",
                "date": "2020-12-03T23:57:09.844Z",
                "userID": "5fc97afe6aad001aa043a050",
                "__v": 0
            }
        ]
    }
}
```

### Failure Response

Code: `500 Internal Server Error`

Content Example:
 ```javascript
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



