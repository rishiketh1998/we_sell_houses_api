## Post Zoopla Properties 

Retrieve Zoopla properties depending on the area passed through 

URL: `/api/v1/areaProperties`

Method: `POST`

Authentication Required: `False`

Admin Only: `False`

URL Params: `None`

Data Params: 
```javascript
{ area: ["valid area", required] }
```

Data Example: 
```javascript
{ area: "London" }
```

### Success Response

Code: `200 OK`

Content Example:
```javascript
 {
         "properties": {
             "country": "England",
             "result_count": 3646,
             "longitude": -1.513149,
             "area_name": "Coventry",
             "listing": [
                 {
                     "country_code": "gb",
                     "num_floors": 0,
                     "image_150_113_url": "https://lid.zoocdn.com/150/113/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "listing_status": "sale",
                     "num_bedrooms": 0,
                     "location_is_approximate": 0,
                     "image_50_38_url": "https://lid.zoocdn.com/50/38/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "latitude": 52.424255,
                     "furnished_state": null,
                     "agent_address": "24A Warwick Road, Coventry",
                     "category": "Residential",
                     "property_type": "",
                     "longitude": -1.439386,
                     "thumbnail_url": "https://lid.zoocdn.com/80/60/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "description": "Fifteen individual mixed apartments / maisonettes... Six two bedrooms... Nine one bedroom... Very close to university hospital in walsgrave... All fully let bringing in rental income of circa £120,000 per annum. An ideal investment for those looking to expand their property portfolio. Located within walking distance of University Hospital in Walsgrave, Coventry and close to the motorway network, this opportunity needs to be viewed to appreciate exactly what is being offered on the market. All fifteen apartments have been completely renovated throughout including heating, windows where required, redecoration and flooring. Some have allocated parking and some have a garage. All apartments will have 999 year leases upon completion and will be sold with the freehold. Please call us now for further information or to book your on-site viewing. Call us now for more information.",
                     "post_town": "Coventry",
                     "details_url": "https://www.zoopla.co.uk/for-sale/details/50924656?utm_source=v1:47_GTDzDVwqA8xG7d7UtpTSqexYw0bWN&utm_medium=api",
                     "short_description": "<p class=\"top\">Fifteen individual mixed apartments / maisonettes... Six two bedrooms... Nine one bedroom... Very close to university hospital in walsgrave... All fully let bringing in rental income of circa £120,000 per annum. An ideal investment for those looking to expand their property portfolio. Located within walking distance of University Hospital in Walsgrave, Coventry and close to the motorway network, this opportunity needs to be viewed to appreciate exactly what is being offered on the market. All fifteen apartments have been completely renovated throughout including heating, windows where required, redecoration and flooring. Some have allocated parking and some have a garage. All apartments will have 999 year leases upon completion and will be sold with the freehold. Please call us now for further information or to book your on-site viewing. Call us now for more information.</p>",
                     "outcode": "CV2",
                     "image_645_430_url": "https://lid.zoocdn.com/645/430/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "county": "West Midlands",
                     "price": "1700000",
                     "listing_id": "50924656",
                     "image_caption": "1",
                     "image_80_60_url": "https://lid.zoocdn.com/80/60/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "status": "for_sale",
                     "agent_name": "Matthew James Property Services",
                     "num_recepts": 0,
                     "country": "England",
                     "first_published_date": "2019-03-26 13:42:31",
                     "displayable_address": "Florence Nightingale Court, Athol Road, Walsgrave CV2",
                     "street_name": "Florence Nightingale Court",
                     "num_bathrooms": 0,
                     "agent_logo": "https://st.zoocdn.com/zoopla_static_agent_logo_(51843).jpeg",
                     "price_change": [
                         {
                             "direction": "",
                             "date": "2019-03-26 13:36:32",
                             "percent": "0%",
                             "price": 1700000
                         }
                     ],
                     "agent_phone": "024 7662 0315",
                     "image_354_255_url": "https://lid.zoocdn.com/354/255/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "image_url": "https://lid.zoocdn.com/354/255/8f235e35c2fd18465d15976c1ca334b3ce217839.jpg",
                     "last_published_date": "2020-09-25 17:52:39"
                 },
                 {
                     "country_code": "gb",
                     "num_floors": 0,
                     "image_150_113_url": "https://lid.zoocdn.com/150/113/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "listing_status": "sale",
                     "num_bedrooms": 0,
                     "location_is_approximate": 0,
                     "image_50_38_url": "https://lid.zoocdn.com/50/38/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "latitude": 52.424236,
                     "furnished_state": null,
                     "agent_address": "115 New Union Street, Coventry",
                     "category": "Residential",
                     "property_type": "Maisonette",
                     "letting_fees": "Tenants – Before You Move In<br><br>Tenancy Agreement Charge - £250<br>Administration Fee &amp; Referencing for up to Two Applicants - £240<br>Additional Applicant &amp; Referencing - £120 Each<br>Guarantor Fee - £60 Per Guarantor (If Required)<br>Company Administration Fee £420<br>Deposit – Typically Six Weeks Rent<br>Pet Deposit – Typically Two Weeks Rent<br>Tenants – During Your Tenancy<br><br>Amendment Fee - £75<br>Renewal Fee on a fix Term Basis – £108<br>Renewal Fee on a Periodic Basis - £54<br>Late Payment of Rent Charge - £50<br>Uncleared Cheque Charge - £50<br>Missed Appointment with Agent, Landlord or Tradesman Charge - £50.00<br>Payment by Credit Card (Where Accepted) – 4% of Total Payment<br>Early Termination of Tenancy (When Approved by Landlord) - £180 (The Landlord May Also Request You Pay Their Re-Letting Costs as Detailed Above)<br>Interest On Unpaid Rent – 8% Above hsbc Base Rate from Date Due<br>Tenants – At The End of Your Tenancy<br><br>Arrangement Charge For Remedial Work Required (i.e. Cleaning) - £75.00<br>Additional Check Out Appointments (Where Necessary) - £75.00 each<br>Same Day Bank Transfer Refunds (Where Agreed) - £50.00<br>Supplying references to 3rd Parties, per reference £30.00<br><h3 class=\"listing-desc-header top\"><strong>Fees explained<br></strong></h3><br>Your deposit is typically six weeks rent.<br><br>Administration Fee &amp; Referencing - The cost of referencing includes checking your credit status, previous employer, current or past landlords, and taking into account any other information to help assess the affordability of your tenancy application.<br><br>Pet Deposit (Returnable) - To cover the added risk of property damage. This will be protected with your security deposit and may be returned at the end of the tenancy<br><br>Renewal Document Fee - Contract negotiation, amending and updating terms and arranging a further tenancy and agreement.<br><br>Independent redress provided by:<br><br>The Property Ombudsman",
                     "longitude": -1.439394,
                     "thumbnail_url": "https://lid.zoocdn.com/80/60/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "description": "Great Investment block of 15 apartments situated within easy reach of University Hospital in Walsgrave, This Freehold unit consist of 6 x 2 bed flats and 9 x 1 bed flats, currently achieving a rental income of £120,000 per annum.",
                     "post_town": "Coventry",
                     "details_url": "https://www.zoopla.co.uk/for-sale/details/54397370?utm_source=v1:47_GTDzDVwqA8xG7d7UtpTSqexYw0bWN&utm_medium=api",
                     "short_description": "Great Investment block of 15 apartments situated within easy reach of University Hospital in Walsgrave, This Freehold unit consist of 6 x 2 bed flats and 9 x 1 bed flats, currently achieving a rental income of £122,000 per annum.",
                     "outcode": "CV2",
                     "image_645_430_url": "https://lid.zoocdn.com/645/430/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "county": "West Midlands",
                     "price": "1700000",
                     "listing_id": "54397370",
                     "image_caption": "Picture No. 01",
                     "image_80_60_url": "https://lid.zoocdn.com/80/60/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "status": "for_sale",
                     "agent_name": "Allsopp & Allsopp",
                     "num_recepts": 0,
                     "country": "England",
                     "first_published_date": "2020-12-03 22:47:24",
                     "displayable_address": "Florence Nightingale Court, 24 Athol Road, Coventry, West Midlands CV2",
                     "floor_plan": [
                         "https://lc.zoocdn.com/88728288eaa960cfe1f5b13404d02888569f9e65.jpg",
                         "https://lc.zoocdn.com/5a10140779b68e71ba6afdc701257e68c8fdaec6.jpg",
                         "https://lc.zoocdn.com/c6c6b26e696e4bd35ecb184a8cb8ef0b345a2962.jpg",
                         "https://lc.zoocdn.com/5cbc71993ce7a7a0aa579cbda1f13133d541ddf1.jpg",
                         "https://lc.zoocdn.com/e09f07cdcab326a9aa6d19607d856f63a9183f70.jpg",
                         "https://lc.zoocdn.com/8126d0eba14f9bfc0e6c35a1745ee469804e22e7.jpg",
                         "https://lc.zoocdn.com/bf4037fcb84d39390a71a12c9eae33d827c37c0b.jpg",
                         "https://lc.zoocdn.com/2897862605d24b965a577a74d92dffa1ca1161f2.jpg",
                         "https://lc.zoocdn.com/caf4e1c4d806ebb944dcdddb73e2ff59632558dc.jpg",
                         "https://lc.zoocdn.com/eb86276c11bc800288f0fe51a17103e9dd9a72d4.jpg",
                         "https://lc.zoocdn.com/8415dfb385dcc4378bde34706b5c1d342f1a2bda.jpg"
                     ],
                     "street_name": "Florence Nightingale Court",
                     "num_bathrooms": 0,
                     "agent_logo": "https://st.zoocdn.com/zoopla_static_agent_logo_(582021).png",
                     "price_change": [
                         {
                             "direction": "",
                             "date": "2020-12-03 22:46:05",
                             "percent": "0%",
                             "price": 1700000
                         }
                     ],
                     "agent_phone": "024 7688 0014",
                     "image_354_255_url": "https://lid.zoocdn.com/354/255/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "image_url": "https://lid.zoocdn.com/354/255/1677ab050b7e1985662f73c82ea86ec9ad249f60.jpg",
                     "last_published_date": "2020-12-03 22:47:24"
                 },
            ]
        }
 }
```

### Failure Response

Code: `401 Bad Request || 500 Internal Server Error`

Content Example:
 ```javascript 
 {"Error": "Internal server error, Please try again in sometime."}
 ```
               



