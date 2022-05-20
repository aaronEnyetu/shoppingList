//import { togglePurchased } from "./fetch-utils";

export function renderItem(item) {


    const div = document.createElement('div');
    div.textContent = `${item.quantity} ${item.name}`;

    // div.addEventListener('click', async () => {
    //     console.log('clicked div');

    //     await togglePurchased(item);

  //  });

    if (item.purchase) {
        div.classList.add('complete');        
    }

    return div;
}

