
let dashboard = document.getElementById('dashboard');
let product = document.getElementById('product');
let userman = document.getElementById('userman');
let inventory = document.getElementById('inventory');
let sales = document.getElementById('sales');
let order = document.getElementById('order');
let billing = document.getElementById('bills');
let batch = document.getElementById('batch');
let analytics = document.getElementById('analytics');
let compliance = document.getElementById('compliance');
let branches = document.getElementById('branches');
let integration = document.getElementById('integration');

dashboard.addEventListener('click', ()=>{
    window.parent.document.getElementById("central").src = './dashboard.html';
});

product.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './products.html';
});

userman.addEventListener('click', ()=> {
    window.parent.document.getElementById("central").src = "./userman.html";
});

inventory.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './inventory.html';
});

sales.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './sales.html';
});

order.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './order.html';
});

billing.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './bills.html';
});

batch.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './batch.html';
});

analytics.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './analytics.html';
});

compliance.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './compliance.html';
});

branches.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './branches.html';
});

integration.addEventListener('click', ()=>{
    window.parent.document.getElementById('central').src = './integration.html';
});