import { test as setup } from '@playwright/test';

setup('Authentication', async ({page}) => {

    const authFile = '.auth/user.json'

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('anna_smith@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Password12345!');
    await page.getByRole('button', { name: 'Submit' }).click();
  
    await page.waitForResponse('https://thinking-tester-contact-list.herokuapp.com/contacts');
  
    await page.context().storageState({path: authFile})
});
