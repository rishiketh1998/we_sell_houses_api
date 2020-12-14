## Get all Properties

Retrieves all the properties that is currently listed on the api

URL: `/api/v1/properties`

Method: `GET`

Authentication Required: `False`

Admin Only: `False`

URL Params: 
``` javascript
["page", "limit", "propertyType", "minPrice", "maxPrice", "minBathrooms", "maxBathrooms","minBedrooms",
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
        "limit": 1,
        "nextPage": "http://localhost:5000/api/v1/properties?page=2&limit=1",
        "data": [
            {
                "location": {
                    "doorNo": "23",
                    "street": "Stonecross Trumpington Road",
                    "postalCode": "CB2 9SU",
                    "city": " Cambridge"
                },
                "images": [],
                "underOffer": false,
                "publish": true,
                "description": "A beautiful, recently renovated 4 bedroom Victorian Townhouse located within a short distance of the city centre, Botanic Gardens, and mainline railway station.",
                "priority": "Normal",
                "features": [
                    "Terrace",
                    "Parking",
                    "Garden"
                ],
                "messages": [],
                "_id": "5fcc2d2194263049b44159b6",
                "bedRooms": 4,
                "bathRooms": 4,
                "price": 650000,
                "propertyName": "Brrok",
                "propertyType": "Terraced",
                "date": "2020-12-06T01:00:17.267Z",
                "userID": "5fc97ae16aad001aa043a04f",
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
               



