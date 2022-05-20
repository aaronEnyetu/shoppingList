import { logout, createListItem, fetchListItems, togglePurchased, deleteAllItems, redirectIfLoggedIn } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';
redirectIfLoggedIn();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.item-form');
const error = document.getElementById('error');
const shoppingListElem = document.getElementById('shoppingList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('name'), itemData.get('quantity'));
    console.log(data);
    if (data) {
        window.location.href = '/cart-page';
    } else {
        error.textContent = 'Something went wrong!';
    }
});

async function displayListItems() {
    shoppingListElem.textContent = '';
    const data = await fetchListItems();
    if (data) {
        for (let item of data) {
            const listElem = renderItem(item);
            listElem.addEventListener('click', async (e) => {
                e.preventDefault();
                await togglePurchased(item);
                displayListItems();
            });
            shoppingListElem.append(listElem);
        }
    }
}

displayListItems();


logoutButton.addEventListener('click', () => {
    logout();
});


const deleteAll = document.getElementById('delete-all');

deleteAll.addEventListener('click', async () => {
    await deleteAllItems();
    displayListItems();

});