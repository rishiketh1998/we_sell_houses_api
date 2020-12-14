## Get User Properties

Retrieves all the properties for an individual user 

URL: `/api/v1/users/:userID/properties`

Method: `GET`

Authentication Required: `True`

Admin Only: `False`

URL Params: 
``` javascript
["userID", "page", "limit", "propertyType", "minPrice", "maxPrice", "minBathrooms", "maxBathrooms","minBedrooms",
"maxBedrooms","location", sort: {"+date", "-date", "+price", "-price"}]
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
                "location": {
                    "doorNo": "20",
                    "street": "Bond",
                    "postalCode": "LE23JK",
                    "city": "London"
                },
                "images": [],
                "underOffer": true,
                "publish": true,
                "description": "oy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ",
                "priority": "High",
                "features": [
                    "Terrace",
                    "Parking",
                    "Gym",
                    "Garden",
                    "Swimming Pool"
                ],
                "messages": [],
                "_id": "5fc97caf6aad001aa043a054",
                "bedRooms": 5,
                "bathRooms": 4,
                "price": 2250000,
                "propertyName": "Laven",
                "propertyType": "Bungalow",
                "date": "2020-12-04T00:02:55.342Z",
                "userID": "5fc97afe6aad001aa043a050",
                "__v": 2
            },
            {
                "location": {
                    "doorNo": "15",
                    "street": "New York St",
                    "postalCode": "CV12JE",
                    "city": "Coventry",
                    "county": "West Midlands"
                },
                "images": [],
                "underOffer": false,
                "publish": true,
                "description": "One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way.",
                "priority": "High",
                "features": [
                    "Retirement-Home"
                ],
                "messages": [],
                "_id": "5fc97ba36aad001aa043a053",
                "bedRooms": 2,
                "bathRooms": 2,
                "price": 150000,
                "propertyName": "Hawk",
                "propertyType": "Detached",
                "date": "2020-12-03T23:58:27.637Z",
                "userID": "5fc97afe6aad001aa043a050",
                "__v": 0
            },
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
                "messages": [
                    "5fce2885c3cd77132464a159"
                ],
                "_id": "5fc97b556aad001aa043a051",
                "bedRooms": 3,
                "bathRooms": 2,
                "price": 350000,
                "propertyName": "Trinity View",
                "propertyType": "Flat",
                "date": "2020-12-03T23:57:09.844Z",
                "userID": "5fc97afe6aad001aa043a050",
                "__v": 1
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
               



