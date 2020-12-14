## Logout

Logs user out.

URL: `/api/v1/logout`

Method: `POST`

Authentication Required: `Fales`

Admin Only: `False`

URL Params: `None`

Data Params: `None`

Data Example: `None`

### Success Response

Code: `200 OK`

Content Example:
```javascript
{
    "Message": "You have successfully logged out."
}
```

### Failure Response

Code: `500 Internal Server Error`

Content Example:
 ```javascript
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



