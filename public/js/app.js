const firebaseConfig = {
    apiKey: "AIzaSyBqJchfVDVrawF97J_A8khwwdNHFFeezuQ",
    authDomain: "layashree-engineering.firebaseapp.com",
    projectId: "layashree-engineering",
    storageBucket: "layashree-engineering.appspot.com",
    messagingSenderId: "712097347718",
    appId: "1:712097347718:web:b551624d34d7cb9805b907",
    measurementId: "G-5574G4MQYV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
popularProducts = [];
items = [];
productTypes = [];
products = [];
flyers = [];
brands = [];
applicationDatas = [];



// $(window).load(
//     function () {
//         $(".spinner").fadeOut(),
//             $(".preloader").delay(150).fadeOut("slow"),
//             $("body").delay(400).css({ overflow: "visible" })

//     }
// );

function passItemData(itemName) {
    localStorage.setItem("itemName", itemName);
    location.href = '../items.html';
}

function passProductData(productName) {
    localStorage.setItem("productName", productName);
    location.href = '../products.html';
}

function getBrands() {
    db.collection("brands").get().then(data => {
        data.docs.forEach(element => {
            const singleBrand = element.data();
            brands.push(singleBrand);
        });

        brands.forEach(element => {
            $('.brands').append(
                `
                <div class="image">
                    <img  src="${element.brandLogo}" alt="image">
                </div>
                `
            );
        })
    });
    $(document).ready(function () {
        $(".brands").delay().css({ visibility: "visible" })

    });

}
getBrands();
function getProducts() {
    productName = localStorage.getItem("productName")
    console.log(productName);
    db.collection(productName).get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            products.push(singleProduct);
        });
        products.forEach(element => {
            $('.product').append(
                `
                <div class="wrapper box">
                    <div class="parent"  onclick="passItemData('${element.brandName}');">
                        <div class="child" style=" background-image: url(${element.brandProImg});">
                        <div class="brandlogo">
                            <img src=${element.brandLogo} alt="">
                        </div>
                     </div>
                </div>
                `
            );
        })
        $(document).ready(function () {
            $('.product').append(
                `
                <div class="wrapper box">
                    <div class="parent"  onclick="location.href = '../flyers.html';">
                        <div class="child" style=" background-image: url(./images/flyer-icon.png);">
                        <div class="flyers" >
                            <p>Flyers</p>
                        </div>
                     </div>
                </div>
                `
            );
        });
        $(document).ready(function () {
            $(".spinner").fadeOut(),
                $(".preloader").delay().fadeOut("fast"),
                $("body").delay().css({ overflow: "visible" })
            $(".product").delay().css({ visibility: "visible" })

        });
    })

}

function getFlyers() {
    db.collection('flyers').get().then(data => {
        data.docs.forEach(element => {
            const singleFlyers = element.data();
            flyers.push(singleFlyers);
        });
        flyers.forEach(element => {
            $('.flyer').prepend(
                `
                <div class="wrapper box " style="
                height: 40vh; width: 40rem;">
                <div class="parent"  onclick="location.href = '${element.productPDF}';">
                    <div class="flyerchild" style="background-image: url(${element.proImg}); background-color:rgba(242, 0, 0, 0); ">
                    </div>
            </div>
                `
            );
        })
        $(document).ready(function () {
            $(".spinner").fadeOut(),
                $(".preloader").delay().fadeOut("fast"),
                $("body").delay().css({ overflow: "visible" })

        });
    });

}


function getItems() {
    itemName = localStorage.getItem("itemName")
    console.log(itemName);
    db.collection(itemName).get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleItems = element.data();
            items.push(singleItems);
        });
        items.forEach(element => {
            $('.item').append(
                `
                        <div class="box">
                            <div class="image ">
                                <img src=${element.productImg} alt="">
                            </div>
                            <div class="content">
                            <p href="#" class="title">${element.productName}</p>
                            <p>${element.productDes}</p>
                        </div>
                        
                    `
            );
        })
        $(document).ready(function () {
            $(".spinner").fadeOut("fast"),
                $(".preloader").delay().fadeOut("fast"),
                $("body").delay().css({ overflow: "visible" }),
                $(".item").delay().css({ visibility: "visible" })
        });
    });
}

function getProductTypes() {
    db.collection('ProductTypes').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProductTypes = element.data();
            productTypes.push(singleProductTypes);
        });
        productTypes.forEach(element => {
            $('.products-type').append(
                `
                    <a onclick="passProductData('${element.productNameCode}');">${element.productTypeName}</a>
                
                `
            );
        })
    });
}

function getPopularProducts() {
    db.collection('popularProducts').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singlePopularProducts = element.data();
            popularProducts.push(singlePopularProducts);
        });
        popularProducts.forEach(element => {
            $('.popular-products').append(
                `
                <div class="col-lg-4 col-md-6">
                    <div class="atf-single-service-wrap text-center">
                        <div class="atf-single-service-wrap" >
                                <div class="d-flex" style="min-height:300px"><img src="${element.productImg}" style=" object-fit: contain;"></img></div>
                            <div class="atf-service-content mt-4" style="">
                                <h2>${element.productName}</h2>
                                <p>${element.productDes}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                `
            );
        })
        $(document).ready(function () {
            $(".popular-products").delay().css({ visibility: "visible" })

        });
    });
}
getPopularProducts();

function getApplicationDatas() {
    db.collection('applicationDatas').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleApplicationData = element.data();
            applicationDatas.push(singleApplicationData);
        });
        applicationDatas.forEach(element => {
            $('.application-datas').append(
                `
                <div class="row m-5" style="    background: var(--black);
                border: 1px solid #e4e4e4;
                box-shadow: 0 5px 15px rgb(0 0 0 / 20%);">
        
                    <div class="image">
                        <img src="${element.appImg}" style="object-fit: cover; height: 100%;" alt="">
                    </div>
        
                    <div class="content">
                        <h1>${element.appName}</h1>
                        <p>${element.appContent}</p>
                    </div>
                </div>
                
                `
            );
        })
        $(document).ready(function () {
            $(".application-datas").delay().css({ visibility: "visible" })

        });
    });
}
getApplicationDatas();