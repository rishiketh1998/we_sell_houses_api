## Update Property Details

Route to allow users to update their property details

URL: `/api/v1/properties/:propertyID`

Method: `PUT`

Authentication Required: `True`

Admin Only: `False`

URL Params: `["propertyID"]`

Data Params: 
```javascript
   {
       "propertyType": ["valid propertyType"],
       "propertyName": ["valid propertyName"],
       "bedRooms": ["valid bedRooms"],
       "bathRooms": ["valid bathrooms"],
       "price": ["valid price"],
       "features": ["valid feature"],
       "images": ["valid image url"]
       "location": {
                 "doorNo": ["valid doorNo", required],
                 "city": ["valid city", required],
                 "street": ["valid street", required],
                 "postalCode": ["valid postalCode", required]
       }
   }
```

Data Example: 
```javascript
    {    
          "propertyType": "Flat",
    }
```

### Success Response

Code: `200 OK`

Content Example:
```javascript
    {"Message": "You have successfully updated your property."}
```

### Failure Response

Code: `400 Bad Request || 401 Unauthorized || 500 Internal Server Error`

Content Example:
 ```javascript
 {"Unauthorized": "Please log in to access this route"} ||
 {"Error": "Email entered is already registered."} || 
 {"Error": "'firstName' is required"} ||
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



