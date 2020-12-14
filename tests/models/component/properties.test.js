/*
const propertiesModel = require('../../../models/properties.js')
const connection = require('../../../helpers/connection.js')

describe('Tests to verify Properties Model and Schema', () => {

    /!**
     * @description: creates connection to test database
     *!/
    beforeEach(async () => {
        await connection()
    })

    describe('Verifies data is not inserted when one of the key pair value is invalid for Properties', () => {

        it('should verify data is not inserted when propertyType is not entered', async (done) => {
            const data = new propertiesModel({
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
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when bedRooms is not entered', async (done) => {
            const data = new propertiesModel({
                propertyType: "Flat",
                propertyName: "Trinity View",
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
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when bathRooms is not entered', async (done) => {
            const data = new propertiesModel({
                propertyType: "Flat",
                propertyName: "Trinity View",
                bedRooms: "2",
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
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })

        it('should verify data is not inserted when price is not entered', async (done) => {
            const data = new propertiesModel({
                propertyType: "Flat",
                propertyName: "Trinity View",
                bathRooms: "2",
                bedRooms: "2",
                location: {
                    doorNo: "132d",
                    street: "asd",
                    city: "sdd",
                    postalCode: "dsadasd"
                },
                images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0UcHqyDVl1kJtFgBFOEPrpqWPOuYm2STcQA&usqp=CAU'],
                description: "Awesome Property",
                features: ['Swimming Pool', 'Gym']
            })
            try {
                const savedData = await data.save()
            } catch (e) {
                console.log(e)
            }
            done()
        })
    });

    describe('Verifies data is inserted when data entered is valid for Properties',  () => {

        it('should verify data is inserted to the data base', async (done) => {
            const data = new propertiesModel({
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
            try {
                const savedData = await data.save()
                expect(savedData.isNew).toEqual(false)
            } catch (e) {
                console.log(e)
            }
            done()
        })
    });
})*/
