InternEcommerce
Ecommerce website with admin privilege using mern stack

Add your mongoURI to connect yourself with the database

Use Postman for creating new products Register Yourself as an admin then add product to the website add new category and get the category id to create new products in the store

Admin Credential APIs
Admin Signup
Request Type : POST
API : http://localhost:5000/admin/signup
Request Body Example : (JSON)
{
"firstName": "Arun",
"lastName": "Teltia",
"email": "teltia.arun18@gmail.com",
"password": "12345678"
}
Admin Login
Request Type: POST
API: http://localhost:5000/admin/login
Request Body Example: (JSON)
{
"email": "teltia.arun18@gmail.com",
"password": "12345678"
}
then grab that token and use it to post item in the screen
Add New Product
Request Type: POST,
API: http://localhost:5000/products/create
Request Body Example JSON
{
name: 'Red t shirt in check',
price: 21,
stock: 100,
description: 'Its a very good t shirt',
productPic: [
{img: http://domain.com/red-shirt.jpeg}
],
keyword: 'red t shirt check t shirt',
category: xxxxxcategoryIdxxxxxxxxxxxxxxxxxx,
createdBy: xxxxxxxxxxxxxxadminIdxxxxxxxxxx
}
Get Product List
Request Type: GET,
API : http://localhost:5000/products

]
Add New category
Request Type: POST
API: http://localhost:5000/category
Request Body Example : {
name: xxxxxxxxxxxxx,
slug: xxxxxxxxx,
parent: xxxxxxxxxxxxxx, or empty
createdBy: xxxxxxxxxxxxx
}
Get Category List
Request Type: GET,
API: http://localhost:2019/category
Response {
"message": [
{
"\_id": "5d8bc1b41e90af2f94e252dd",
"name": "Accessories",
"slug": "accessories",
"children": [
{
"\_id": "5d8bc7fc1e90af2f94e252de",
"name": "Handbags",
"slug": "handbags",
"children": []
},
{
"\_id": "5d8bc8df4c53543868bfcd14",
"name": "Watches",
"slug": "watches",
"children": []
}
]
}
]
}
