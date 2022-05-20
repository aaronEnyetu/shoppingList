import { checkAuth, logout, createListItem, fetchListItems } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.item-form');
const error = document.getElementById('error');
const shoppingListElem = document.getElementById('shopping-list');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('name'), itemData.get('quantity'));
    if (data) {
        window.location.href = '/';
    } else {
        error.textContent = 'Something went wrong!';
    }
});

async function displayListItems() {
    shoppingListElem.textContent = '';
    const data = await fetchListItems();
    if(data) {
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


logoutButton.addEventListener('click', () => {
    logout();
});
