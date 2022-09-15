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
productOptions = [];
items = [];
productTypes = [];
products = [];
flyers = [];
brands = [];


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

// function getBrands() {
//     db.collection("brands").get().then(data => {
//         data.docs.forEach(element => {
//             const singleBrand = element.data();
//             brands.push(singleBrand);
//         });
//         brands.forEach(element => {
//             $('.slick-track').append(
//                 `
//                 <div class="slick-slide-in">
//                     <div class="atf-brand-active">
//                         <a href="#"><img src="${element.brandLogo}" alt="image"></a>
//                     </div>
//                 </div>
                
                        
//                     `
//             );
//         })
//     });
// }
// getBrands();

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
            $('.products').prepend(
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
            $('.products').append(
                `
                <div class="wrapper box">
                    <div class="parent"  onclick="location.href = '../flyers.html';">
                        <div class="child" style=" background-image: url(./images/flyer-icon.png);">
                        <div class="flyers" >
                            <h3>Flyers</h3>
                        </div>
                     </div>
                </div>
                `
            );
        });
        $(document).ready(    function () {
            $(".spinner").fadeOut(),
                $(".preloader").delay(150).fadeOut("slow"),
                $("body").delay(400).css({ overflow: "visible" })
    
        });
    });

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
                height: 40vh; width: 20vw;">
                <div class="parent"  onclick="location.href = '${element.productPDF}';">
                    <div class="child" style="background-image: url(${element.proImg}); background-color:rgba(242, 0, 0, 0); ">
                    </div>
            </div>
                `
            );
        })
        $(document).ready(    function () {
            $(".spinner").fadeOut(),
                $(".preloader").delay(150).fadeOut("slow"),
                $("body").delay(400).css({ overflow: "visible" })
    
        });
    });

}


function getItems() {
    itemName = localStorage.getItem("itemName")
    console.log(itemName);
    db.collection(itemName).get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            items.push(singleProduct);
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
                            <span>${element.productPrice}</span>
                            <p>${element.productDes}</p>
                        </div>
                        
                    `
            );
        })
        $(document).ready(    function () {
            $(".spinner").fadeOut(),
                $(".preloader").delay(150).fadeOut("slow"),
                $("body").delay(400).css({ overflow: "visible" })
    
        });
    });
}

function getProductTypes() {
    db.collection('ProductTypes').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            productTypes.push(singleProduct);
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

function getProductOptions() {
    db.collection('productOptions').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            productOptions.push(singleProduct);
        });
        productOptions.forEach(element => {
            $('.checkmark-options').append(
                `
                <div class="group">
                    <input class="largerCheckbox" type="checkbox" name="products" id="${element.productName}" value="${element.productName}" >
                    <label for="${element.productName}">${element.productName}</label><span class="checkmark"></span>
                </div>
                
                `
            );
        })
    });
}
getProductOptions();

