## Add Property 

Route to allow users to add a new property

URL: `/api/v1/properties`

Method: `POST`

Authentication Required: `True`

Admin Only: `False`

URL Params: `None`

Data Params: 
```javascript
   {
       "propertyType": ["valid propertyType", required],
       "propertyName": ["valid propertyName"],
       "bedRooms": ["valid bedRooms",required],
       "bathRooms": ["valid bathrooms",required],
       "price": ["valid price",required],
       "features": ["valid feature"],
       "images": ["valid image url"]
       "location": [{
                 "doorNo": ["valid doorNo", required],
                 "city": ["valid city", required],
                 "street": ["valid street", required],
                 "postalCode": ["valid postalCode", required]
       }, required]
   }
```

Data Example: 
```javascript
  {
      "propertyType": "House",
      "propertyName": "Lynden House",
      "bedRooms": 2,
      "bathRooms": 3,
      "price": 250000,
      "features": ["garden", "swimming pool"],
      "location": {
          "doorNo": "172",
          "city": "Covenrty",
          "street": "Spencer Road",
          "postalCode": "CV256NZ"
      }
  }
```

### Success Response

Code: `201 Created`

Content Example:
```javascript
   {"Message": "You have successfully added a Property."}
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
               



