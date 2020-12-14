const usersModel = require('../../../models/users.js')
const connection = require('../../../helpers/connection.js')

describe('Tests to verify Users Model and Schema',  () => {

    /**
     * @description: creates connection to test database
     */
    beforeEach(async () => {
        await connection()
    })

    describe('Verifies data is not inserted when one of the key pair value is invalid', () => {

        it('should verify data is not inserted when first name is not entered', async (done) => {
            const data = new usersModel({
                lastName: "Keth",
                email: "rishiketh1998@gmai.com",
                password: "sdds",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when last name is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                email: "rishiketh1998@gmai.com",
                password: "sdds",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when email is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                password: "sdds",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when email entered is already added to the database', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: "sdds",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            const newData = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: "sdds",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            const savedData = await data.save()  //inserting the data with a new email
            try {
                const savedData2 = await newData.save()  //inserting n new data with the same above email
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when password is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when phoneNo is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: 'qew',
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when signUpCode is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: 'qew',
                phoneNo: "9898",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when doorNo is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: 'qew',
                phoneNo: "9898",
                signUpCode: "Sdad",
                address: {
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when street is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: 'qew',
                phoneNo: "9898",
                signUpCode: "Sdad",
                address: {
                    doorNo: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when postalCode is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: 'qew',
                phoneNo: "9898",
                signUpCode: "Sdad",
                address: {
                    doorNo: "asd",
                    city: "sdd",
                    street: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when city is not entered', async (done) => {
            const data = new usersModel({
                firstName: "Keth",
                lastName: "Rishi",
                email: "rishiketh1998@gmail.com",
                password: 'qew',
                phoneNo: "9898",
                signUpCode: "Sdad",
                address: {
                    doorNo: "asd",
                    postalCode: "sdd",
                    street: "dsadasd"
                }
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

    });

    describe('Verifies data is inserted when data entered is valid',  () => {

        it('should verify data is inserted to the data base', async (done) => {
            const data = new usersModel({
                firstName: "Rishi",
                lastName: "Keth",
                email: "rishiketh",
                password: "sdds",
                phoneNo: "93489",
                signUpCode: "Sdad",
                address: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                },
            })
            try {
                const savedData = await data.save()
                expect(savedData.isNew).toEqual(false)
            } catch (e) {
                console.log(e)
            }
            done()
        })
    });

});