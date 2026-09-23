/*

User Input in Playwright:

When we automate a web application, we frequently need to enter text, 
click buttons, select values, check checkboxes, etc. 

For ex on login page:

Username: [ Prajakta          ]
Password: [ ********          ]

Playwright provides different methods for handling these.

url: https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fservice%3Dmail%26flowName%3DGlifWebSignIn%26flowEntry%3DAccountChooser%26ec%3Dasw-gmail-globalnav-signin&dsh=S772989333%3A1789569665239740&flowEntry=ServiceLogin&flowName=GlifWebSignIn


1. fill() — Enter text

Ex1:

userName: await page.locator('#identifierId').fill('Prajakta');   

// Find the identifierId field and enter Prajakta.
If the field already contains something, fill() clears it first and enters the new value.

Ex2:

password: await page.locator(input[type=password]).fill('12345'); // mostly input tag is for input.



2. type() — Type text

Ex1:
userName: await page.locator('#identifierId').type('Prajakta');
// This types the characters one by one, similar to keyboard typing.

| `fill()`                           | `type()`                                          |
| ---------------------------------- | ------------------------------------------------- |
| Fills the complete value           | Types character by character                      |
| Clears existing value first        | Doesn't automatically clear existing text         |
| Usually preferred for normal input | Useful when you specifically need typing behavior |



3. press() — Keyboard key

You can press a specific keyboard key:

Ex1: userName: await page.locator('#identifierId').press('Enter');

Ex2: userName: await page.locator('#identifierId').press('Tab');

Ex3: userName: await page.locator('#identifierId').press('Control+A');

Ex4: userName: await page.locator('#identifierId').press('Escape');



4. Checkbox — check()

Ex1: await page.locator('.a-icon a-icon-checkbox').check();

Ex2: await page.locator('.a-icon a-icon-checkbox').uncheck();


5. Radio button:

Ex1: await page.locator(input[type=radio]).check();


6. Dropdown — selectOption()

Ex1: await page.locator(div[class='VfPpkd-aPP78e']).selectOption('india');



//userInput with function:

function getCheckboxLocator(className) {
    return `.${className}`;
}

let selector = getCheckboxLocator('a-icon a-icon-checkbox');

await page.locator(selector).check();

*/



