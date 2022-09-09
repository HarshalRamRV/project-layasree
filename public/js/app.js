const firebaseConfig = {
    apiKey: "AIzaSyDWV9CIAhVouAGzGP1uGH-D0nFpzyTP4vM",
    authDomain: "layasree-webiste.firebaseapp.com",
    projectId: "layasree-webiste",
    storageBucket: "layasree-webiste.appspot.com",
    messagingSenderId: "413759846215",
    appId: "1:413759846215:web:444a7858f2a73338727e62",
    measurementId: "G-XXMZ3EVLQP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
productOptions = [];
items = [];
productTypes = [];
products= [];



function passItemData(itemName) {
    localStorage.setItem("itemName", itemName);
    location.href = '../items.html';
}

function passProductData(productName) {
    localStorage.setItem("productName", productName);
    location.href = '../products.html';
}

 function getProducts() {
    productName = localStorage.getItem("productName")
    console.log(productName);
     db.collection('moterBrands').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            products.push(singleProduct);
        });
        products.forEach(element => {
            $('.products').append(
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
    });
}
getProducts();

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
    });
}
getItems();

function getProductTypes() {
    db.collection('productTypes').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            productTypes.push(singleProduct);
        });
        productTypes.forEach(element => {
            $('.products-type').append(
                `
                <div class="dropdown-new-menu">
                    <a onclick="passProductData('${element.productNameCode}');">${element.productTypeName}</a>

                </div>
                
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
