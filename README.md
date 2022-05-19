## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

## Shopping List Plan

## HTML Elements

### List Page

- <ul> for list of items --need to show each item so we'll append <li></li> to the <ul>
- checkbox/crossingout for completing items -- display purchased state -- clicking will toggle purchased (need to make a supabase call)
- delete button --deletes all the items so we can make a new list (needs to make a supabase call)
- new item button -- redirects us to the create page



###Create Page
-form with inputs for quantity, name and submit button
-create new items onSubmit (will redirect back to list)
-back button (to return to list page)



##To DO List

## 1. Database Setup
*Make your table
*Add user_id foreign key relation (default to `uid())
*Add RLS `user_id = uid()` for all actions

## 2. Create Page
*Add your form
*Write your create function in fetch-utils.js
*Add your submit event listner
*Grab data using `new FormData` and send to supabase 
*Redirect to `list` page
_Validation Step: New rows are being added in supabase

## 3. List Page: List all items
*Add a `<ul>` element
*TDD our render function
*Add our fetch function in fetch-utils.js
*On load, grab all the data from supabase, use our render function to display
_Validation Step: you can see rows on the page -- sign in as another user and ensure that you're only seeing authed user's data_

## 4. List Page: Delete Items
*Add a delete button
*Add delete all items function in fetch-utils.js
*Add event listener to call delete function and remove all items from the list

## 5. List Page: Update Items
- Add a click event handler to our list items that updates individual items in supabase
- call displayListItems()