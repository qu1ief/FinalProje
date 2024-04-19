const currentUrl = window.location.href;
console.log(currentUrl.split("?")[1])
const prodid=currentUrl.split("?")[1]
const ProductData = [
    {
        "id": 1,
        "name": "Watch1",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=640&q=75",
        "price": 100,
        "disCount":200
    },
    {
        "id": 2,
        "name": "Watch2",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=384&q=75",
        "price": 120,
        "disCount":200
    },
    {
        "id": 3,
        "name": "Watch3",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=640&q=75",
        "price": 110,
        "disCount":200
    },
    {
        "id": 4,
        "name": "Watch4",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=640&q=75",
        "price": 140,
        "disCount":200
    },
    {
        "id": 5,
        "name": "Watch",
        "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=640&q=75",
        "price": 160,
        "disCount":200
    }
]


const Product=ProductData.find(x=>x.id==prodid)
console.log(Product)


async function GetSingleProducts() {
    const SingleProductContainer=document.getElementById("SingleProdContainer")
    
        // const response = await axios('yourendpoint')
    
        // Get product data in place
    
            let product = document.createElement('div')
            product.classList.add(`Singlesection1__all`)
            product.innerHTML = `
            <div class="Singlesection1__left">
            <div class="Singkesection1__left__top">
                <img src="${Product.image}"
                    alt="">
            </div>
            <div class="singlesection1__left__buttom">
                <div class="olter__imgs">  <img src="${Product.image}"
                alt=""></div>
                <div class="olter__imgs">  <img src="${Product.image}"
                alt=""></div>

            </div>
        </div>
        <div class="Singlesection1__right">
            <h3><strong>Lord 2013</strong></h3>
            <div class="flexdiv">
                <p style="color: gray;">Brand :</p>
                <p>Ziaomi</p>
            </div>
            <div class="flexdiv">
                <p style="color: gray;">Rated :</p>
                <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                        class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> <i
                        class="fa-regular fa-star"></i></p>
            </div>
            <div class="car">
                <p class="car__price"><strong>168 $</strong></p>
                <p>Stock Aviable</p>
            </div>
            <div>
                <button class="singleBtn">Add to Card</button>
            </div>
            <div style="margin-top: 30px;" class="flexdiv">
                <p style="color: gray;">Sold by :</p>
                <p>Mobil Store</p>
            </div>
        </div>
    
    
        
    `
    
            // Then send them to HTML in style
            SingleProductContainer.append(product)
        
    
    }
    
    GetSingleProducts()





    const ProductData2 = [
        {
            "id": 6,
            "name": "Watch1",
            "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F29.AppleEarphones.png&w=640&q=75",
            "price": 100,
            "disCount":200
        },
        {
            "id": 7,
            "name": "Watch2",
            "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F30.Nokiaandroidone.png&w=640&q=75",
            "price": 120,
            "disCount":200
        },
        {
            "id": 8,
            "name": "Watch3",
            "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=640&q=75",
            "price": 110,
            "disCount":200
        },
        {
            "id": 9,
            "name": "Watch4",
            "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F33.beatswirelessearphones.png&w=640&q=75",
            "price": 140,
            "disCount":200
        },
        {
            "id": 10,
            "name": "Watch",
            "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F34.HTC2018.png&w=640&q=75",
            "price": 160,
            "disCount":200
        }
    ]
    const Product2=ProductData2.find(x=>x.id==prodid)
console.log(Product2)
    async function GetSingleProducts2() {
        const SingleProductContainer=document.getElementById("SingleProdContainer")
        
            // const response = await axios('yourendpoint')
        
            // Get product data in place
        
                let product = document.createElement('div')
                product.classList.add(`Singlesection1__all`)
                product.innerHTML = `
                <div class="Singlesection1__left">
                <div class="Singkesection1__left__top">
                    <img src="${Product2.image}"
                        alt="">
                </div>
                <div class="singlesection1__left__buttom">
                    <div class="olter__imgs"><img
                    <img src="${Product2.image}"
                    alt=""></div>
                    <div class="olter__imgs">  <img src="${Product2.image}"
                    alt=""></div>
    
                </div>
            </div>
            <div class="Singlesection1__right">
                <h3><strong>Lord 2013</strong></h3>
                <div class="flexdiv">
                    <p style="color: gray;">Brand :</p>
                    <p>Ziaomi</p>
                </div>
                <div class="flexdiv">
                    <p style="color: gray;">Rated :</p>
                    <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                            class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> <i
                            class="fa-regular fa-star"></i></p>
                </div>
                <div class="car">
                    <p class="car__price"><strong>168 $</strong></p>
                    <p>Stock Aviable</p>
                </div>
                <div>
                    <button class="singleBtn">Add to Card</button>
                </div>
                <div style="margin-top: 30px;" class="flexdiv">
                    <p style="color: gray;">Sold by :</p>
                    <p>Mobil Store</p>
                </div>
            </div>
        
        
            
        `
        
                // Then send them to HTML in style
                SingleProductContainer.append(product)
            
        
        }
        
        GetSingleProducts2()






        const ProductData3 = [
            {
                "id": 11,
                "name": "Lord2019",
                "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=640&q=75",
                "price": 10000,
                "disCount":13000
            },
            {
                "id": 12,
                "name": "Lord2017",
                "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=640&q=75",
                "price": 12000,
                "disCount":13000
            },
            {
                "id": 13,
                "name": "Lord22",
                "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=640&q=75",
                "price": 11000,
                "disCount":12000
            },
            {
                "id": 14,
                "name": "Watch4",
                "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=640&q=75",
                "price": 14000,
                "disCount":16000
            },
            {
                "id": 15,
                "name": "Watch",
                "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F6.Ford2020.png&w=640&q=75",
                "price": 16000,
                "disCount":20000
            }
        ]


        const Product4=ProductData3.find(x=>x.id==prodid)
        console.log(Product)
    
        async function GetSingleProducts3() {
            const SingleProductContainer=document.getElementById("SingleProdContainer")
            
                // const response = await axios('yourendpoint')
            
                // Get product data in place
            
                    let product = document.createElement('div')
                    product.classList.add(`Singlesection1__all`)
                    product.innerHTML = `
                    <div class="Singlesection1__left">
                    <div class="Singkesection1__left__top">
                        <img src="${Product4.image}"
                            alt="">
                    </div>
                    <div class="singlesection1__left__buttom">
                        <div class="olter__imgs"><img
                                src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                                alt=""></div>
                        <div class="olter__imgs"><img
                                src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                                alt=""></div>
        
                    </div>
                </div>
                <div class="Singlesection1__right">
                    <h3><strong>Lord 2013</strong></h3>
                    <div class="flexdiv">
                        <p style="color: gray;">Brand :</p>
                        <p>Ziaomi</p>
                    </div>
                    <div class="flexdiv">
                        <p style="color: gray;">Rated :</p>
                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> <i
                                class="fa-regular fa-star"></i></p>
                    </div>
                    <div class="car">
                        <p class="car__price"><strong>168 $</strong></p>
                        <p>Stock Aviable</p>
                    </div>
                    <div>
                        <button class="singleBtn">Add to Card</button>
                    </div>
                    <div style="margin-top: 30px;" class="flexdiv">
                        <p style="color: gray;">Sold by :</p>
                        <p>Mobil Store</p>
                    </div>
                </div>
            
            
                
            `
            
                    // Then send them to HTML in style
                    SingleProductContainer.append(product)
                
            
            }
            
            GetSingleProducts3()




            const ProductData5 = [
                {
                    "id": 16,
                    "name": "Sun Eyeglasses",
                    "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=640&q=75",
                    "price": 100,
                    "disCount":130
                },
                {
                    "id": 17,
                    "name": "Eye Glaseeses",
                    "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F8.RayBanMattBlack.png&w=640&q=75",
                    "price": 120,
                    "disCount":130
                },
                {
                    "id": 18,
                    "name": "Glaseeses",
                    "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=640&q=75",
                    "price": 110,
                    "disCount":120
                },
                {
                    "id": 19,
                    "name": "Glaseeses",
                    "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F10.RayBanOcean.png&w=640&q=75",
                    "price": 140,
                    "disCount":160
                },
                {
                    "id": 20,
                    "name": "Sun Glaseeses",
                    "image": "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=640&q=75",
                    "price": 160,
                    "disCount":200
                }
            ]

            const Product5=ProductData5.find(x=>x.id==prodid)
            console.log(Product)
        
            async function GetSingleProducts5() {
                const SingleProductContainer=document.getElementById("SingleProdContainer")
                
                    // const response = await axios('yourendpoint')
                
                    // Get product data in place
                
                        let product = document.createElement('div')
                        product.classList.add(`Singlesection1__all`)
                        product.innerHTML = `
                        <div class="Singlesection1__left">
                        <div class="Singkesection1__left__top">
                            <img src="${Product5.image}"
                                alt="">
                        </div>
                        <div class="singlesection1__left__buttom">
                            <div class="olter__imgs"><img
                                    src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                                    alt=""></div>
                            <div class="olter__imgs"><img
                                    src="https://bonik-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png"
                                    alt=""></div>
            
                        </div>
                    </div>
                    <div class="Singlesection1__right">
                        <h3><strong>Lord 2013</strong></h3>
                        <div class="flexdiv">
                            <p style="color: gray;">Brand :</p>
                            <p>Ziaomi</p>
                        </div>
                        <div class="flexdiv">
                            <p style="color: gray;">Rated :</p>
                            <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                    class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> <i
                                    class="fa-regular fa-star"></i></p>
                        </div>
                        <div class="car">
                            <p class="car__price"><strong>168 $</strong></p>
                            <p>Stock Aviable</p>
                        </div>
                        <div>
                            <button class="singleBtn">Add to Card</button>
                        </div>
                        <div style="margin-top: 30px;" class="flexdiv">
                            <p style="color: gray;">Sold by :</p>
                            <p>Mobil Store</p>
                        </div>
                    </div>
                
                
                    
                `
                
                        // Then send them to HTML in style
                        SingleProductContainer.append(product)
                    
                
                }
                
                GetSingleProducts5()
    





