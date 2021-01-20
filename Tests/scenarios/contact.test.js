const chai = require('chai');
const expect = require('chai').expect
const should = chai.should();
const app = require('../../index');
const chaiHttp = require('chai-http');



let contactId;
describe("Save Tweets Test", function () {

    chai.use(chaiHttp);
    it('should create New Contact', function (done) {
        chai.request(app)
            .post('/contact')
            .set('content-type', 'application/json')
            .send({
                "name": "Ahmed",
                "phoneNumber": {
                    "work": "01265773",
                    "home": "8917981374"
                },
                "mailingAddress": "73 test street",
                "emailAddress": "ahmed@test.com"
            })
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response.body.name).to.equal("Ahmed");
                    expect(response.body.phoneNumber.work).to.equal("01265773");
                    expect(response.body.phoneNumber.home).to.equal("8917981374");
                    expect(response.body.mailingAddress).to.equal("73 test street");
                    expect(response.body.emailAddress).to.equal("ahmed@test.com");
                    contactId = response.body._id;
                    done();
                }
            });
    })

    it('should get contact', function (done) {
        let url = `/contact/${contactId}`
        chai.request(app)
            .get(url)
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response.body[0].name).to.equal("Ahmed");
                    expect(response.body[0].phoneNumber.work).to.equal("01265773");
                    expect(response.body[0].phoneNumber.home).to.equal("8917981374");
                    expect(response.body[0].mailingAddress).to.equal("73 test street");
                    expect(response.body[0].emailAddress).to.equal("ahmed@test.com");
                    done();
                }
            });

    })

    it('should update contact', function (done) {
        let url = `/contact/${contactId}`
        chai.request(app)
            .patch(url)
            .set('content-type', 'application/json')
            .send({
                "phoneNumber": {
                    "work": "98765430",
                },
                "mailingAddress": "2020 changed street",
                "emailAddress": "ahmed@changed.com"
            })
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response.body.name).to.equal("Ahmed");
                    expect(response.body.phoneNumber.work).to.equal("98765430");
                    expect(response.body.phoneNumber.home).to.equal("8917981374");
                    expect(response.body.mailingAddress).to.equal("2020 changed street");
                    expect(response.body.emailAddress).to.equal("ahmed@changed.com");
                    done();
                }
            });
    })

    it('should delete contact', function (done) {

        let url = `/contact/${contactId}`
        chai.request(app)
            .delete(url)
            .set('content-type', 'application/json')
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response.text).to.equal('Contact Ahmed Deleted');
                    done();
                }
            });

    })

})
