const { test, expect } = require('playwright/test')

test('Login to app', async({ request }) => {

    const postAPIResponse = await request.post(`/users/login`, {
        data:{
                "email": "anna_smith@gmail.com",
                "password": "Password12345!"
            }
    })

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json();
    console.log(postAPIResponseBody);
})

test('Get all contacts', async({ request }) => {

    const getAPIResponse = await request.get(`/contacts/`)

    console.log(await getAPIResponse.json())

    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe('200');
})

test('Update contact', async({ request }) => {

})