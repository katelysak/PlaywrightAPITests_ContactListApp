const { test, expect } = require('playwright/test')
import { faker } from '@faker-js/faker'
const loginAPIRequestBody = require('../test-data/login.json')

test('Login to app', async({ request }) => {

    // const loginAPIRequestBody = require('../test-data/post_login.json')

    const loginResponse = await request.post(`/users/login`, {
        data: loginAPIRequestBody
    })

    expect(loginResponse.ok()).toBeTruthy();
    expect(loginResponse.status()).toBe(200);

    const loginAPIResponseBody = await loginResponse.json();
    const tokenResponse = await loginAPIResponseBody.token;
    console.log("Token No is: "+tokenResponse);

    console.log(loginAPIResponseBody);

    expect(loginAPIResponseBody.user).toHaveProperty('firstName', 'Anna');
    expect(loginAPIResponseBody.user).toHaveProperty('lastName', 'Smith');
})

test('Get all contacts', async({ request }) => {

    const getAPIResponse = await request.get(`/contacts/`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=`
        }
    }
    )

    console.log(await getAPIResponse.json())

    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe('200');
})

test('Create contact', async({ request }) => {

})

test('Update contact', async({ request }) => {

})

test('Delete contact', async({ request }) => {

})

test('Log out', async({ request }) => {

})