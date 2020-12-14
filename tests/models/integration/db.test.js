/*
const connection = require('../../../helpers/connection.js')
const propertiesModel = require('../../../models/properties.js')
const usersModel = require('../../../models/users.js')
const messagesModel = require('../../../models/messages.js')

describe('Integration tests to verify right data is inserted to the database',  () => {

    /!**
     * @description: creates connection to test database
     *!/
    beforeEach(async () => {
        await connection()
    })

    describe('Tests to verify association of Users and Properties', () => {

        it('should verify users collection associates with properties', async (done) => {
            const userData = new usersModel({
                firstName: "Rishi",
                lastName: "Keth",
                email: "rishiketh123",
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
            const propertyData = new propertiesModel({
                propertyType: "Flat",
                propertyName: "Trinity View",
                bedRooms: "2",
                bathRooms: "2",
                location: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                },
                price: "2000",
                images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0UcHqyDVl1kJtFgBFOEPrpqWPOuYm2STcQA&usqp=CAU'],
                description: "Awesome Property",
                features: ['Swimming Pool', 'Gym']
            })
            userData.properties.push(await propertyData.save())
            const savedData = await userData.save()
            expect(savedData.properties.length).toEqual(1)
            done()
        });

    });

    describe('Tests to verify association of Messages and Properties', () => {

        it('should verify properties collection associates with messages', async (done) => {
            const propertyData = new propertiesModel({
                propertyType: "Flat",
                propertyName: "Trinity View",
                bedRooms: "2",
                bathRooms: "2",
                location: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                },
                price: "2000",
                images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0UcHqyDVl1kJtFgBFOEPrpqWPOuYm2STcQA&usqp=CAU'],
                description: "Awesome Property",
                features: ['Swimming Pool', 'Gym']
            })
            const messageData = new messagesModel({
                message: 'This is reallu good',
                email: 'rishik@gmail.com'
            })
            propertyData.messages.push(await messageData.save())
            const savedData = await propertyData.save()
            expect(savedData.messages.length).toEqual(1)
            done()
        });
    });

})*/
