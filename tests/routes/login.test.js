const request = require('supertest')
const app = require('../../index.js')
const usersCollection = require('../../models/users.js')

describe('Tests to verify login route',  () => {

    const LOGIN_URL = "/api/v1/login"

    const REGISTER_URL = "/api/v1/users"

    describe('Tests to verify POST route for users to login', () => {

        it('should return a status code of 401 and a message stating "Unauthorized: Please enter a valid' +
            'email / password" when invalid email or password is passed through', async done => {
            const userDetails = {
                email: '',
                password: 'rishiketh"'
            }//invalid email
            const response = await request(app).post(LOGIN_URL).send(userDetails)
            expect(response.status).toEqual(401)
            expect(JSON.parse(response.text)).toEqual({'Unauthorized': 'Please enter a valid Email and Password'})
            done()
        });

        it('should return a status code of 401 and a message stating  "Unauthorized: Please enter a valid' +
            'email / password" when email entered does not exist in the database', async done => {
            const userDetails = {
                email: 'rishiketh1998@gmail.com',
                password: 'Rishiketh1@'
            }//valid email details but email is not registered
            const response = await request(app).post(LOGIN_URL).send(userDetails)
            expect(response.status).toEqual(401)
            expect(JSON.parse(response.text)).toEqual({'Unauthorized': 'Please enter a valid Email and Password'})
            done()
        })

        it('should return a status code of 401 and a message stating  "Unauthorized: Please enter a valid' +
            'email / password" when password entered does not match the password for the email entered', async done => {
            const registerData = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "nice@gmail.com",
                "password": "Rishiketh1@",
                "phoneNo": "07708436008",
                "signUpCode": "sdasd",
                "address": {
                    "doorNo": "172",
                    "city": "Covenrty",
                    "street": "Spencer Road",
                    "postalCode": "CV256NZ"
                }
            } //valid data
            await request(app).post(REGISTER_URL).send(registerData)//registering a user*/
            const userDetails = {
                email: 'nice@gmail.com',
                password: 'Rishiketh1'
            }//valid email but invalid password
            const response = await request(app).post(LOGIN_URL).send(userDetails)
            expect(response.status).toEqual(401)
            expect(JSON.parse(response.text)).toEqual({'Unauthorized': 'Please enter a valid Email and Password'})
            await usersCollection.findOneAndDelete({email: 'nice@gmail.com'}) //deleting the registered user
            done()
        })

        it('should returns a status code of 200 and a message stating "Message: You have successfully registered"' +
            'when email and password entered is valid', async done => {
            const registerData = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "nice@gmail.com",
                "password": "Rishiketh1@",
                "phoneNo": "07708436008",
                "signUpCode": "sdasd",
                "address": {
                    "doorNo": "172",
                    "city": "Covenrty",
                    "street": "Spencer Road",
                    "postalCode": "CV256NZ"
                }
            } //valid data
            await request(app).post(REGISTER_URL).send(registerData)//registering a user*/
            const userDetails = {
                email: 'nice@gmail.com',
                password: 'Rishiketh1@'
            }//valid email and password
            const response = await request(app).post(LOGIN_URL).send(userDetails)
            expect(response.status).toEqual(200)
            expect(JSON.parse(response.text)).toEqual({'Message': 'You have successfully logged in.'})
            await usersCollection.findOneAndDelete({email: 'nice@gmail.com'}) //deleting the registered user
            done()
        });
    });

});