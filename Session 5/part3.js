console.log('Bai 1: ');
let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let wordArr = ['to', 'be', 'that', 'of', 'elon', 'this', 'now', 'back', 'cool', 'hey', 'love', 'life', 'rain', 'summer', 'color', 'hat', 'late', 'sorry', 'my', 'team'];

for (let i = 0; i < wordArr.length; i++) {
    let count = 0;

    for (let x = 0; x < word.length; x++) {
        if (word[x] == wordArr[i]) {
            count++;
        }
    }
    console.log(count);
}
console.log('Bai 2: ');
const inventory = [

    {

        name: 'HP Envy 13',

        price: 21000,

        brand: 'HP',

        quantity: 5,

    },

    {

        name: 'Dell XPS 9370',

        price: 30000,

        brand: 'Dell',

        quantity: 1,

    },

    {

        name: 'Dell Inspiron 3567',

        price: 9300,

        brand: 'Dell',

        quantity: 12,

    },

    {

        name: 'Dell Latitude E5450',

        price: 8600,

        brand: 'Dell',

        quantity: 2,

    },

    {

        name: 'Asus Zenbook',

        brand: 'Asus',

        price: 20000,

        quantity: 4,

    },

    {

        name: 'HP Pavilion',

        brand: 'HP',

        price: 14000,

        quantity: 7,

    },
]

let inventoryByBrand = {}

let dell = [];
let hp = [];
let asus = [];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].brand == 'Dell') {
        dell.push(inventory[i]);
    } else if (inventory[i].brand == 'Asus') {
        asus.push(inventory[i]);
    } else if (inventory[i].brand == 'HP') {
        hp.push(inventory[i]);
    }
}

inventoryByBrand.asus = asus;
inventoryByBrand.dell = dell;
inventoryByBrand.hp = hp;

console.log(inventoryByBrand);

console.log('Bai 4: ');
let inputBrand = prompt('Which brand ?(Dell,Asus,HP)');
let generationName = [];
for (let i = 0; i < inventoryByBrand[inputBrand.toLocaleLowerCase()].length; i++) {
    generationName.push(inventoryByBrand[inputBrand.toLocaleLowerCase()][i].name);
}
let price = 0;
for (let i = 0; i < inventoryByBrand[inputBrand.toLocaleLowerCase()].length; i++) {
    price = price + inventoryByBrand[inputBrand.toLocaleLowerCase()][i].price;
}
alert('There are ' + inventoryByBrand[inputBrand.toLocaleLowerCase()].length + ' generations of "' + inputBrand + '" brand in inventory!' + '\n- ' + generationName.join('\n- ') + '\nTotal price: ' + price.toLocaleString()+'VND');