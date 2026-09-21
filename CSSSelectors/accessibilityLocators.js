/* Accessibility locators identify elements the way an assistive technology (like a screen reader) would identify them.


The most commonly used one in Playwright is:

1. getByRole() — Most important

Suppose our HTML is:

<button>Login</button>

Instead of:

page.locator('button')

we can write:

page.getByRole('button', { name: 'Login' })

Read it as:

Find an element whose role is button and whose accessible name is Login.

Ex1: https://login.yahoo.com/

next: page.getByRole('button' , {name: 'Next'});

Ex2:
username: page.getByrole('textbox' ,{name: 'Username, email or phone number'});



2. getByLabel(): 

Ex: serchBox: page.getByLabel('twotabsearchtextbox');



3. getByText:

searchBox: page.getByText('Search Amazon.in');



4: getByTitle:

   title: page.getByTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    In tital tag whichever text will be there we have to add it.
    


5. getByPlaceHolder:

   page.getByPlaceholder('Search Amazon.in');


6. getByAltText:

page.getByAltText('Cotton bedsheets');


7. getByTestId():

url: https://www.qapractice.com/practice-login-form

page.getByTestId('login-password');




*/