const expect = require('chai').expect;
const request = require('request');

//Test With Single Functions for each thing
// it('Main page content', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });
//
// it('Main page status', function (done) {
//     request('http://localhost:8080', function (error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });
//
// it('About page content', function(done) {
//     request('http://localhost:8080/about' , function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//     });
// });

//Test With Grouping
describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8080/' , function(error, response, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8080/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});