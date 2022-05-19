import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.getElementById('new-post');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        name: data.get('name'),
        quantity: data.get('quantity'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
    if (resp) {
        location.replace('/');
    }
});

logoutButton.addEventListener('click', () => {
    logout();
});
