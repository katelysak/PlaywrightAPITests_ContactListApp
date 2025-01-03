const { test, expect } = require('playwright/test')
import { faker } from '@faker-js/faker'

test('Login to app', async({ request }) => {

    const loginAPIRequestBody = require('../test-data/post_login.json')

    const postAPIResponse = await request.post(`/users/login`, {
        data: loginAPIRequestBody
    })

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json();
    console.log(postAPIResponseBody);

    expect(postAPIResponseBody.user).toHaveProperty('firstName', 'Anna');
    expect(postAPIResponseBody.user).toHaveProperty('lastName', 'Smith');
})

test('Get all contacts', async({ request }) => {

    const getAPIResponse = await request.get(`/contacts/`)

    console.log(await getAPIResponse.json())

    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe('200');
})

test('Update contact', async({ request }) => {

})