const { test, expect, request } = require('playwright/test')
const loginAPIRequestBody = require('../test-data/login.json')

// test.beforeEach('Token generation', async({ request }) => {
//     const loginAPIRequestBody = require('../test-data/login.json')

//     const loginResponse = await request.post(`/users/login`, {
//         data: loginAPIRequestBody
//     })

//     expect(loginResponse.ok()).toBeTruthy();
//     expect(loginResponse.status()).toBe(200);

//     const loginAPIResponseBody = await loginResponse.json();
//     const tokenNo = loginAPIResponseBody.token;
//     console.log("Token No is: "+tokenNo);
// })

test('Get all contacts', async({ request }) => {

    const getAPIResponse = await request.get(`/contacts`)

    console.log(await getAPIResponse.json())

    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe(200);
})

test('Create contact', async({ request }) => {
    const createContactAPIRequestBody = require('../test-data/createContact.json')

    const createContactAPIResponse = await request.post(`/contacts`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
        },
        data: createContactAPIRequestBody
    })

    console.log(await createContactAPIResponse.json());

    expect(createContactAPIResponse.ok()).toBeTruthy();
    expect(createContactAPIResponse.status()).toBe(201);

    const createContactAPIResponseBody = await createContactAPIResponse.json();
    expect(createContactAPIResponseBody).toHaveProperty('firstName', 'John');
    expect(createContactAPIRequestBody).toHaveProperty('lastName', 'Doe');
})

test('Update contact', async({ request }) => {
    const updateContactAPIRequestBody = require('../test-data/updateContact.json');

    const updateContactAPIResponse = await request.put(`/contacts/6779e82fd4f5a20013308f69`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
        },
        data: updateContactAPIRequestBody
    })

    console.log(await updateContactAPIResponse.json());

})

test('Delete contact', async({ request }) => {

    const deleteContactAPIResponse = await request.delete(`/contacts/6779e7d8d6de2600137f14a2`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }
    })
})

test('Get deleted contact - validation', async({ request }) => {

    const getDeleteContactAPIResponse = await request.get(`/contacts/6779e7d8d6de2600137f14a2`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }
    })

    expect(getDeleteContactAPIResponse.status()).toBe(404);
})

test('Log out', async({ request }) => {

})