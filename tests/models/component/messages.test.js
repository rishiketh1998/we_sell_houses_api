/*
const messagesModel = require('../../../models/messages.js')
const connection = require('../../../helpers/connection.js')

describe('Tests to verify Messages Model and Schema',  () => {

    /!**
     * @description: creates connection to test database
     *!/
    beforeEach(async () => {
        await connection()
    })

    describe('Verifies data is not inserted when one of the key pair value is invalid for Messages', () => {

        it('should verify data is not inserted when message is not entered', async (done) => {
            const data = new messagesModel({
                email: "rishiekth199@gmail.com"
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when email is not entered', async (done) => {
            const data = new messagesModel({
                message: "Really like the property"
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

    });

    describe('Verifies data is inserted when data entered is valid for Messages',  () => {

        it('should verify data is inserted to the data base', async (done) => {
            const data = new messagesModel({
                message: "Really like the property",
                email: "rishiketh1998@gmial.com"
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
})
*/
