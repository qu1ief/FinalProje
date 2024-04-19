

// Fake Data

const Data = [
    {
        "id": 1,
        "name": "Watch",
        "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "price": 100
    },
    {
        "id": 2,
        "name": "Watch",
        "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "price": 120
    },
    {
        "id": 3,
        "name": "Watch",
        "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "price": 110
    },
    {
        "id": 4,
        "name": "Watch",
        "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "price": 140
    },
    {
        "id": 5,
        "name": "Watch",
        "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "price": 160
    }
]


//================HTML Stuff================

const AllProducts = document.getElementById('AllProducts')
const BasketContainer = document.getElementById('BasketContainer')



let Basket

GetBasket()


//----------------------AllProducts----------------------


// Get Products

async function GetProducts() {

    // const response = await axios('yourendpoint')

    // Get product data in place
    Data.forEach(element => {
        let product = document.createElement('div')
        product.innerHTML = `<div class="card">
                <div class="productImgDiv">
                    <img src=${element.img} alt="" class="productImg">
                </div>
                <h3 class="productName">${element.name}</h3>
                <span class="productPrice">$${element.price}</span>
                <button onClick="AddToBasket(${element.id})">AddToBasket</button>
            </div>`

        // Then send them to HTML in style
        AllProducts.append(product)
    })

}

GetProducts()


//----------------------Basket----------------------


// Create basket element and add it to HTMl
async function AddToBasket(id) {

    // Fetch Data
    // let response = await axios.get(`http://localhost:3000/basket`)

    const productIndex = Basket.findIndex(x => x.id === id)

    if (productIndex !== -1) {
        Basket[productIndex].count += 1
        // totalPrice
        localStorage.setItem('basket', JSON.stringify(Basket))
    }
    else {
        const product = Data.find(x => x.id === id)

        product.count = 1

        Basket = [...Basket, product]

        localStorage.setItem('basket', JSON.stringify(Basket))
    }

    console.log(Basket);

    // Reset basket before adding data back
    BasketContainer.innerHTML = ''


    Basket.forEach(element => {

        // Get clicked product to wishlist
        let item = document.createElement('div')
        item.classList.add('wishlistProduct')

        item.innerHTML = `<img class="wishlistProductImg" src=${element.img}>    
                <div class="wishlistProductTextBox">
                    <div class="headLine">
                        <h3 class="wishlistProductName">${element.name}</h3>
                        <i class="fa-solid fa-xmark closeBtn" onclick="RemoveProduct(${element.id})"></i>
                    </div>
                    <span class="">${element.count} x ${element.price}</span>
                    <br/>
                    <span class="">Total Price${element.count * element.price}</span>
                </div>`

        BasketContainer.append(item)
    });

}




//---------------For Refresh---------------

function GetBasket() {
    try {
        Basket = JSON.parse(localStorage.getItem('basket'))
        console.log(Basket);
        Basket.forEach(element => {

            // Get clicked product to wishlist
            let item = document.createElement('div')
            item.classList.add('wishlistProduct')

            item.innerHTML = `<img class="wishlistProductImg" src=${element.img}>    
                    <div class="wishlistProductTextBox">
                        <div class="headLine">
                            <h3 class="wishlistProductName">${element.name}</h3>
                            <i class="fa-solid fa-xmark closeBtn" onclick="RemoveProduct(${element.id})"></i>
                        </div>
                        <span class="">${element.count} x ${element.price}</span>
                        <br/>
                        <span class="">Total Price${element.count * element.price}</span>
                    </div>`

            BasketContainer.append(item)
        });
    } catch (error) {
        localStorage.setItem('basket', JSON.stringify([]))
        console.log(error);
    }
}
