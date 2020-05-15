var faker = require('faker');


Feature('Login Test Suite (Cucumber Similar)');


Before(loginPage => {
    console.log("Before Method");
    loginPage.authenticate(faker.internet.email(), "password")
});

Scenario('Fill the authentication form', (I) => {
    console.log("Test Content")
}).tag('@slow').tag('important');


Scenario('Fill the authentication form 2', (I) => {
    console.log("Test Content")
}).tag('@slow').tag('important');


After(async () => {
    await console.log("After Method");
});

