const SUPABASE_URL = 'https://wuqcwgxturbjhkdtdjwn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1cWN3Z3h0dXJiamhrZHRkanduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MjQ0MjMsImV4cCI6MTk2ODMwMDQyM30.qVkreSGtYAMaEk7THSwEY_1E0AB9q0iNMjuFXHaIa8Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}



export async function redirectIfLoggedIn() {
    if (!getUser()) {
        location.replace('/');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}
  

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
export async function fetchPosts() {
    const response = await client.from('posts').select('*');
    return response.data;
}

export async function createNewPost(post) {
    const response = await client.from('posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

export async function createListItem(name, quantity) {
    const response = await client.from('shopping-items').insert({ name, quantity });

    if (response.error) {
        console.error(response.error.message);

    } else {
        return response.data;
    }
}

export async function fetchListItems() {
    const response = await client. from('shopping-items').select('*').order('name');

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }

}

export async function togglePurchased(item) {
    console.log(item);
    const response = await client
        .from('shopping-items')
        .update({ purchase: !item.purchase })
        .match({ id: item.id });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }

}

export async function deleteAllItems() {
    const response = await client.from('shopping-items').delete().match({ user_id: getUser().id });
    return response.data;
}