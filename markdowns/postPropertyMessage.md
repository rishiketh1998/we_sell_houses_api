## Post Message to an Agent (Property related) 

If a user is interested in a property they can message the property agent.

URL: `/api/v1/properties/:propertyID/messages`

Method: `POST`

Authentication Required: `False`

Admin Only: `False`

URL Params: `None`

Data Params: 
```javascript
{ email: ["valid email", required], message: ["valid message", required] }
```

Data Example: 
```javascript
{ email: "omen@gmail.com", message: "Amzing Property" }`
```

### Success Response

Code: `200 OK`

Content Example:
```javascript
 {
     "Message": "Your message has been posted."
 }
```

### Failure Response

Code: `401 Bad Request || 500 Internal Server Error`

Content Example:
 ```javascript
{ "Error": "'message' is not allowed to be empty"} || 
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



