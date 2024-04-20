const ProductData = [
    {
        "id": 1,
        "name": "Phone",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=640&q=75",
        "price": 100,
        "disCount": 200
    },
    {
        "id": 2,
        "name": "Shoes",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=384&q=75",
        "price": 120,
        "disCount": 200
    },
    {
        "id": 3,
        "name": "Watch",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=640&q=75",
        "price": 110,
        "disCount": 200
    },
    {
        "id": 4,
        "name": "Watch4",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=640&q=75",
        "price": 140,
        "disCount": 200
    },
    {
        "id": 5,
        "name": "Watch5",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=640&q=75",
        "price": 160,
        "disCount": 200
    }
]

const BasketContainer = document.getElementById('BasketContainer')
let Basket
GetBasket()
GetBasket2()


async function GetHomeProducts() {
    const HomeSWiperContiner = document.getElementById("SecondSwiperHome")
    // const response = await axios('yourendpoint')

    // Get product data in place
    ProductData.forEach(element => {
        let product = document.createElement('div')
        product.classList.add(`swiper-slide`)
        product.innerHTML = `
        <div class="card homesection2__card" style="width: 18rem;">
           <a href="./SingleProduct.html?${element.id}">
            <img src="${element.image}"
            class="card-img-top" alt="...">
           </a>
            <div class="wishlistdiv">
                <button> <i style="color: red;" class="fa-regular fa-heart"></i>
                </button>
                <button> <i class="fa-regular fa-eye"></i></button>
            </div>
            <div class="card-body cardbodysec2home">
                <h5 class="card-title">"${element.name}"</h5>
                <p class="card-text"><i class="fa-regular fa-star"></i> <i
                        class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i
                        class="fa-regular fa-star"></i></p>
                <div class="section2__cardhome">
                    <div class="section2__cardhome__text" style="display: flex;">
                        <p style="color: red;">${element.price} AZN</p>
                        <del>
                            <p>${element.disCount} AZN</p>
                        </del>
                    </div> <button onClick="AddToBasket(${element.id})">+</button>
                </div>
            </div>
        </div>


    
`

        // Then send them to HTML in style
        HomeSWiperContiner.append(product)
    })

}

GetHomeProducts()


// add to basket  

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
        const product = ProductData.find(x => x.id === id)

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


function GetBasket() {
    try {
        Basket = JSON.parse(localStorage.getItem('basket'))
        console.log(Basket);
        Basket.forEach(element => {

            // Get clicked product to wishlist
            let item = document.createElement('div')
            item.classList.add('wishlistProduct')

            item.innerHTML = `<div class="ooo">
            <img class="wishlistProductImg" src=${element.image}>    
                    <div class="wishlistProductTextBox">
                        <div class="headLine">
                            <h3 class="wishlistProductName">${element.name}</h3>
                        </div>
                        <p class=""><strong>Count</strong>:  ${element.count}  </p>
                        <p> <strong>Price</strong>: ${element.price} AZN</p>
                      
                        <p class=""><strong>Total Price</strong>: ${element.count * element.price} AZN</p>
                    </div>
            </div>`

            BasketContainer.append(item)
        });
    } catch (error) {
        localStorage.setItem('basket', JSON.stringify([]))
        console.log(error);
    }
}



const modal=document.querySelector('.inside__modal')
const searchInput=document.querySelector('.searchInput')

searchInput.addEventListener('input',(e)=>{
    const searchText = e.target.value.toLowerCase().trim();

    const filteredProducts = ProductData.filter(x => x.name.toLowerCase().trim().includes(searchText));
    modal.innerHTML=''
    filteredProducts.forEach(x=>{
        modal.innerHTML+=`<a href="SingleProduct.html?${x.id}" class="first__prod"> <p>${x.name}</p>
        <p>${x.price}</p>
        </a>
        `
    })
    
})


searchInput.addEventListener('focus',()=>{
    modal.style.display="block"

})


searchInput.addEventListener('blur',()=>{
    setTimeout(()=>{
        modal.style.display="none"

    },700)
})


// 2 ci kartlar 


const ProductData2 = [
    {
        "id": 6,
        "name": "AirPods",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F29.AppleEarphones.png&w=640&q=75",
        "price": 100,
        "disCount": 200
    },
    {
        "id": 7,
        "name": "Phone 12",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F30.Nokiaandroidone.png&w=640&q=75",
        "price": 120,
        "disCount": 200
    },
    {
        "id": 8,
        "name": "Hpc 2018",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=640&q=75",
        "price": 110,
        "disCount": 200
    },
    {
        "id": 9,
        "name": "Iphone",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F33.beatswirelessearphones.png&w=640&q=75",
        "price": 140,
        "disCount": 200
    },
    {
        "id": 10,
        "name": "Watch",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F34.HTC2018.png&w=640&q=75",
        "price": 160,
        "disCount": 200
    }
]

async function GetHomeProducts2() {
    const HomeSection2__container = document.getElementById("section7__row")

    // const response = await axios('yourendpoint')

    // Get product data in place
    ProductData2.forEach(element => {
        let product = document.createElement('div')
        product.classList.add(`col-lg-4`)
        product.innerHTML = `
            <div class="card homesection7__card" style="width: 18rem;">
            <a href="./SingleProduct.html?${element.id}">
               <div>
               <img src=${element.image}
               class="card-img-top" alt="...">
               </div>
               </a>
                <div class="wishlistdiv7">
                    <button> <i style="color: red;" class="fa-regular fa-heart"></i>
                    </button>
                    <button> <i class="fa-regular fa-eye"></i></button>
                </div>
                <div class="card-body cardbodysec7home">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text"><i class="fa-regular fa-star"></i></p>
                    <div class="section7__cardhome">
                        <div class="section7__cardhome__text" style="display: flex;">
                            <p style="color: red; ">${element.price} AZN</p>
                            <del style="color: black;">
                                <p>${element.disCount} AZN</p>
                            </del>
                        </div> <button onClick="AddToBasket2(${element.id})">+</button>
                    </div>
                </div>
            </div>
    
    
        
    `

        // Then send them to HTML in style
        HomeSection2__container.append(product)
    })

}

GetHomeProducts2()



async function AddToBasket2(id) {

    // Fetch Data
    // let response = await axios.get(`http://localhost:3000/basket`)

    const productIndex = Basket.findIndex(x => x.id === id)

    if (productIndex !== -1) {
        Basket[productIndex].count += 1
        // totalPrice
        localStorage.setItem('basket', JSON.stringify(Basket))
    }
    else {
        const product = ProductData2.find(x => x.id === id)

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


function GetBasket2() {
    try {
        Basket = JSON.parse(localStorage.getItem('basket'))
        console.log(Basket);
        Basket.forEach(element => {

            // Get clicked product to wishlist
            let item = document.createElement('div')
            item.classList.add('wishlistProduct')

            // item.innerHTML = `<div class="oooo">
            // <img class="wishlistProductImg" src=${element.image}>    
            //         <div class="wishlistProductTextBox">
            //             <div class="headLine">
            //                 <h3 class="wishlistProductName">${element.name}</h3>
            //             </div>
            //             <p class=""><strong>Count</strong>:  ${element.count}  </p>
            //             <p> <strong>Price</strong>: ${element.price} AZN</p>

            //             <p class=""><strong>Total Price</strong>: ${element.count * element.price} AZN</p>
            //         </div>
            // </div>`

            BasketContainer.append(item)
        });
    } catch (error) {
        localStorage.setItem('basket', JSON.stringify([]))
        console.log(error);
    }
}









// section3 Cars api 


const ProductData3 = [
    {
        "id": 11,
        "name": "Lord2019",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=640&q=75",
        "price": 10000,
        "disCount": 13000
    },
    {
        "id": 12,
        "name": "Lord2017",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=640&q=75",
        "price": 12000,
        "disCount": 13000
    },
    {
        "id": 13,
        "name": "Lord22",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=640&q=75",
        "price": 11000,
        "disCount": 12000
    },
    {
        "id": 14,
        "name": "Watch4",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=640&q=75",
        "price": 14000,
        "disCount": 16000
    },
    {
        "id": 15,
        "name": "Watch",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F6.Ford2020.png&w=640&q=75",
        "price": 16000,
        "disCount": 20000
    }
]


async function GetHomeProducts3() {
    const Section75__row = document.getElementById("Section75__row")

    // const response = await axios('yourendpoint')

    // Get product data in place
    ProductData3.forEach(element => {
        let product = document.createElement('div')
        product.classList.add(`col-lg-4`)
        product.innerHTML = `
                                <div class="card homesection7_5__card" style="width: 18rem;">
                                <a href="./SingleProduct.html?${element.id}">
                                <div>
                                   <img src="${element.image}"
                                   class="card-img-top" alt="...">
                                   </div>
                                   </a>
                                    <div class="wishlistdiv7_5">
                                        <button> <i style="color: red;" class="fa-regular fa-heart"></i>
                                        </button>
                                        <button> <i class="fa-regular fa-eye"></i></button>
                                    </div>
                                    <div class="card-body cardbodysec7home">
                                        <h5 class="card-title">Iphone 13 Pro max</h5>
                                        <p class="card-text"><i class="fa-regular fa-star"></i></p>
                                        <div class="section7_5__cardhome">
                                            <div class="section7_5__cardhome__text" style="display: flex;">
                                                <p style="color: red;">$108.54</p>
                                                <del style="color: black;">
                                                    <p>122.23</p>
                                                </del>
                                            </div> <button>+</button>
                                        </div>
                                    </div>
                                </div>
        
        
            
        `

        // Then send them to HTML in style
        Section75__row.append(product)
    })

}

GetHomeProducts3()












const ProductData5 = [
    {
        "id": 16,
        "name": "Lord2019",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=640&q=75",
        "price": 10000,
        "disCount": 13000
    },
    {
        "id": 17,
        "name": "Lord2017",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F8.RayBanMattBlack.png&w=640&q=75",
        "price": 12000,
        "disCount": 13000
    },
    {
        "id": 18,
        "name": "Lord22",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=640&q=75",
        "price": 11000,
        "disCount": 12000
    },
    {
        "id": 19,
        "name": "Watch4",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F10.RayBanOcean.png&w=640&q=75",
        "price": 14000,
        "disCount": 16000
    },
    {
        "id": 20,
        "name": "Watch",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=640&q=75",
        "price": 16000,
        "disCount": 20000
    }
]


async function GetHomeProducts5() {
    const section9__container = document.getElementById("section9__container")

    // const response = await axios('yourendpoint')

    // Get product data in place
    ProductData5.forEach(element => {
        let product = document.createElement('div')
        product.classList.add(`col-lg-4`)
        product.innerHTML = `
                    <div class="col-lg-4 col-md-6 res__div9">
                    <div class="card homesection9__card" style="width: 18rem;">
                    <a href="./SingleProduct.html?${element.id}">
                    <div>
                       <img src="${element.image}" class="card-img-top" alt="...">
                       </div>
                       </a>
                           
                        <div class="wishlistdiv9">
                            <button> <i style="color: red;" class="fa-regular fa-heart"></i>
                            </button>
                            <button> <i class="fa-regular fa-eye"></i></button>
                        </div>
                        <div class="card-body cardbodysec9home">
                            <h5 class="card-title">Iphone 13 Pro max</h5>
                            <p class="card-text"><i class="fa-regular fa-star"></i></p>
                            <div class="section9__cardhome">
                                <div class="section9__cardhome__text" style="display: flex;">
                                    <p style="color: red;">$108.54</p>
                                    <del style="color: black;">
                                        <p>122.23</p>
                                    </del>
                                </div> <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                
            `

        // Then send them to HTML in style
        section9__container.append(product)
    })

}

GetHomeProducts5()