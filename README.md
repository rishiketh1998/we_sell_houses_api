# We Sell Houses RESTAPI Docs

### Open Endpoints 

Open end points require no Authentication

* [Post Login](markdowns/postLogin.md): `POST /api/v1/login`
* [Post Logout](markdowns/logout.md): `POST /api/v1/logout`
* [Post User](markdowns/postUser.md): `POST /api/v1/users`
* [Get All Properties](markdowns/getAllProperties.md): `GET /api/v1/properties`
* [Get Individual Property](markdowns/getIndividualProperty.md): `GET /api/v1/properties/:id` 
* [Post Property Message](markdowns/postPropertyMessage.md): `POST /api/v1/properties/:propertyID/messages`
* [Post Zoopla Properties](markdowns/postZooplaProperties.md): `POST /api/v1/areaProperties`

### End points that require Authentication

Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from the Login view above.

* [Get Login](markdowns/getLogin.md): `GET /api/v1/login`
* [Get Users](markdowns/getUsers.md): `GET /api/v1/users`
* [Get Individual User](markdowns/getIndividualUser.md): `Get /api/v1/users/:userID`
* [Get All Properties By User ID](markdowns/getAllPropertiesByUserID.md): `GET /api/v1/users/:userID/properties`
* [Get All Messages By User ID](markdowns/getAllMessagesByUserID.md): `GET /api/v1/users/:userID/messages` 
* [Put User Details](markdowns/putUserDetails.md): `PUT /api/v1/users/:userID`
* [Delete User Details](markdowns/deleteUser.md): `DELTE /api/v1/users/:userID`
* [Get All Messages By Property ID](markdowns/getAllMessagesByPropertyID.md): `GET /api/v1/properties/:propertyID/messages`
* [Put Property Details](markdowns/putPropertyDetails.md): `PUT /api/v1/properties/:propertyID`
* [Post Individual Property](markdowns/postProperty.md): `POST /api/v1/properties`
* [Delete Property Details](markdowns/deleteProperty.md): `DELETE /api/v1/properties/:propertyID`
* [Get All Messages](markdowns/getAllMessages.md): `GET /api/v1/messages`
* [Get Individual Message](markdowns/getIndividualMessages.md): `GET /api/v1/messages/:messageID`
* [Put Message Details](markdowns/putMessageDetails.md): `PUT /api/v1/messages/:messageID`
* [Delete Message Details](markdowns/deleteMessage.md): `DELETE /api/v1/messages/:messageID`

Status and Status Codes used in this application.

| Status | Status Code |
| :---:  | :---:  |
| OK | 200 |
| CREATED | 201 |
| BAD REQUEST | 400 |
| UNAUTHORIZED | 401 |
| FORBIDDEN | 403 |
| NOT FOUND | 404 |
| INTERNAL SERVER ERROR | 500 |
| SERVICE UNAVAILABLE | 503 |
 









 


