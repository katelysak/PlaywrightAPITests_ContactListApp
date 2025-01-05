const { test, expect } = require('playwright/test')
import { faker } from '@faker-js/faker'
const loginAPIRequestBody = require('../test-data/login.json')

test.beforeEach('Token generation', async({ request }) => {
    const loginAPIRequestBody = require('../test-data/login.json')

    const loginResponse = await request.post(`/users/login`, {
        data: loginAPIRequestBody
    })

    expect(loginResponse.ok()).toBeTruthy();
    expect(loginResponse.status()).toBe(200);

    const loginAPIResponseBody = await loginResponse.json();
    const tokenNo = loginAPIResponseBody.token;
    console.log("Token No is: "+tokenNo);
})

test('Login to app with not valid credentials - validation', async({ request }) => {

    // const loginAPIRequestBody = require('../test-data/post_login.json')

    // const loginResponse = await request.post(`/users/login`, {
    //     data: loginAPIRequestBody
    // })

    // expect(loginResponse.ok()).toBeTruthy();
    // expect(loginResponse.status()).toBe(200);

    // const loginAPIResponseBody = await loginResponse.json();
    // const tokenNo = loginAPIResponseBody.token;
    // console.log("Token No is: "+tokenNo);

    // console.log(loginAPIResponseBody);

    // expect(loginAPIResponseBody.user).toHaveProperty('firstName', 'Anna');
    // expect(loginAPIResponseBody.user).toHaveProperty('lastName', 'Smith');
})

test('Get all contacts', async({ request }) => {

    const getAPIResponse = await request.get(`/contacts`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcyOTg4ZTEwZWY4MjAwMTM1NTc1OGIiLCJpYXQiOjE3MzYwNDE2NDN9.mzFPmCUCCEINx9XNLc9CEVxLts6i3VCaPTo9VOA9miw`
        }
    })

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
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcyOTg4ZTEwZWY4MjAwMTM1NTc1OGIiLCJpYXQiOjE3MzYwNDE2NDN9.mzFPmCUCCEINx9XNLc9CEVxLts6i3VCaPTo9VOA9miw`
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
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcyOTg4ZTEwZWY4MjAwMTM1NTc1OGIiLCJpYXQiOjE3MzYwNDI4MDF9.fEAo_Yz-vicqe4g0gr_qFSacObTkqLFSEbRuyILF5P0`
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
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcyOTg4ZTEwZWY4MjAwMTM1NTc1OGIiLCJpYXQiOjE3MzYwNDMyMTd9.Cl8470QPA3bqu9BHMYZEW2Qh2ZKCSt2Q7di7oVRBk3o`
        }
    })
})

test('Get deleted contact - validation', async({ request }) => {

    const getDeleteContactAPIResponse = await request.get(`/contacts/6779e7d8d6de2600137f14a2`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzcyOTg4ZTEwZWY4MjAwMTM1NTc1OGIiLCJpYXQiOjE3MzYwNDMyMTd9.Cl8470QPA3bqu9BHMYZEW2Qh2ZKCSt2Q7di7oVRBk3o`
        }
    })

    expect(getDeleteContactAPIResponse.status()).toBe(404);
})

test('Log out', async({ request }) => {

})