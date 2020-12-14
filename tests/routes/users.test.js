/*
const request = require('supertest')
const app = require('../../index.js')
const usersCollection = require('../../models/users.js')


describe('Tests to verify Users Route / Endpoint',  () => {

    const USERS_URL = "/api/v1/users"

    describe('Tests to verify POST route for users to register', () => {

        it('should respond with a status code of 400 and an error message stating' +
            'lastname is required when lastName is not entered', async done => {
            const registerData = {
                "firstName": "Rishi",
                "email": "rishi@gmail.com",
                "password": "Rishiketh1@",
                "phoneNo": "07708436008",
                "signUpCode": "sdasd",
                "address": {
                    "doorNo": "172",
                    "city": "Covenrty",
                    "street": "Spencer Road",
                    "postalCode": "CV256NZ"
                }
            } //last name is missing should error
            const response = await request(app).post(USERS_URL).send(registerData)
            expect(response.text).toEqual("{\"Error\":\"\\\"lastName\\\" is required\"}")
            expect(response.status).toEqual(400)
            done()
        })

        it('should respond with a status code of 400 and an error message stating' +
            'email entered is not valid when an invalid email is entered', async done => {
            const registerData = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail",
                "password": "Rishiketh1@",
                "phoneNo": "07708436008",
                "signUpCode": "sdasd",
                "address": {
                    "doorNo": "172",
                    "city": "Covenrty",
                    "street": "Spencer Road",
                    "postalCode": "CV256NZ"
                }
            } //invalid email address
            const response = await request(app).post(USERS_URL).send(registerData)
            expect(response.text).toEqual("{\"Error\":\"\\\"email\\\" must be a valid email\"}")
            expect(response.status).toEqual(400)
            done()
        })

        it('should verify a status code of 400 and an an error message stating email ' +
            'entered is already registered is displayed when duplicate email is entered', async done => {
            const registerData = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
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
            await request(app).post(USERS_URL).send(registerData)//registering a user
            const newRegisterData = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
                "password": "Rishiketh1@",
                "phoneNo": "07708436008",
                "signUpCode": "sdasd",
                "address": {
                    "doorNo": "172",
                    "city": "Covenrty",
                    "street": "Spencer Road",
                    "postalCode": "CV256NZ"
                }
            } //invalid data as it hold the same email id as previous one
            const response = await request(app).post(USERS_URL).send(newRegisterData)
            expect(response.status).toEqual(400)
            expect(response.text).toEqual("{\"Error\":\"Email entered is already registered.\"}")
            await usersCollection.findOneAndDelete({'email': 'rishi@gmail.com'}) //deleting the test user once the test passes
            done()
        })

        it('should verify a status code of 200 and a message stating Successfully registered' +
            ' is returned when a data entered is valid', async done => {
            const registerData = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
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
            const response = await request(app).post(USERS_URL).send(registerData)//registering a user
            expect(response.status).toEqual(200)
            expect(response.text).toEqual("{\"message\":\"You have successfully registered.\"}")
            await usersCollection.findOneAndDelete({'email': 'rishi@gmail.com'}) //deleting the test user once the test passes
            done()
        })
    });

    describe('Tests to verify GET all users route', () => {

        it('should verify  a status code of 200 and an object with user details and page details' +
            'is returned', async done => {
            const testData1 = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
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
            const testData2 = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishiketh@gmail.com",
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
            //registering 2 users
            await request(app).post(USERS_URL).send(testData1)//registering user1
            await request(app).post(USERS_URL).send(testData2)//registering user2
            const response = await request(app).get(USERS_URL)
            expect(response.status).toEqual(200)
            expect(JSON.parse(response.text).results.data.length).toEqual(2)//verifying 2 users are added
            await usersCollection.findOneAndDelete({'email': 'rishi@gmail.com'}) //deleting the test user once the test passes
            await usersCollection.findOneAndDelete({'email': 'rishiketh@gmail.com'}) //deleting the test user once the test passes
            done()
        })

    });

    describe('Tests to verify GET one users route', () => {

        it('should verify a status code of 200 and the right user details is returned', async done => {
            const testData1 = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
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
            await request(app).post(USERS_URL).send(testData1)//registering a user
            const user = await usersCollection.findOne({'email': 'rishi@gmail.com'})
            const response = await request(app).get(USERS_URL + `/${user._id}`)//making a request to retrieve the above user details
            expect(response.status).toEqual(200)
            expect(JSON.parse(response.text).result.email).toEqual('rishi@gmail.com')
            await usersCollection.deleteOne({'email': 'rishi@gmail.com'}) //deleting the test user once the test passes
            done()
        })

    });

    describe('Tests to verify PUT/UPDATE one user route', () => {

        it('should verify a status code of 200 and a message stating user details is updated should' +
            'be retrieved', async done => {
            const testData1 = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
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
            await request(app).post(USERS_URL).send(testData1)//registering a user
            const user = await usersCollection.findOne({'email': 'rishi@gmail.com'})
            const response = await request(app).put(USERS_URL + `/${user._id}`).send({'firstName': 'Rishiketh'})//updating firstname
            expect(response.status).toEqual(200)
            expect(JSON.parse(response.text).message).toEqual('You have successfully updated your account.')
            const updatedUser = await usersCollection.findOne({'email': 'rishi@gmail.com'})
            expect(updatedUser.firstName).toEqual('Rishiketh')//verifying its updated
            await usersCollection.deleteOne({'email': 'rishi@gmail.com'}) //deleting the test user once the test passes
            done()
        });
    })

    describe('Tests to verify Delete one user route', () => {

        it('should verify a status code of 200 and a message stating your account is deleted should' +
            'be retrieved', async done => {
            const testData1 = {
                "firstName": "Rishi",
                "lastName": "Keth",
                "email": "rishi@gmail.com",
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
            await request(app).post(USERS_URL).send(testData1)//registering a user
            const user = await usersCollection.findOne({'email': 'rishi@gmail.com'})
            const response = await request(app).delete(USERS_URL + `/${user._id}`)//deleting the above user
            expect(response.status).toEqual(200)
            expect(JSON.parse(response.text).message).toEqual('Your account has been deleted')
            done()
        });

    })

});*/
