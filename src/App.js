import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Catalog from './Catalog';
import Cta from './Cta';
import Footer from './Footer';
import PopularItems from './PopularItems';
import Product from './Product';
import Sale from './Sale';

const cat = [
  {
    name: "Men's Wear",
    imgAdd: "images/categories/mens-ware.jpg",
  },
  {
    name: "Ladies Wear",
    imgAdd: "images/categories/ladies-ware.jpg",
  },
  {
    name: "Kid's Wear",
    imgAdd: "images/categories/kids-ware.jpg",
  },
  {
    name: "Smart Watch",
    imgAdd: "images/categories/smart-watch.jpg",
  },
  {
    name: "Sunglasses",
    imgAdd: "images/categories/sunglasses.jpg",
  },
  
];

const product = [
  {
    imgPath: "images/product/product-1.jpg",
    title : "Black Print T-Shirt",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :4
  },
  {
    imgPath: "images/product/product-2.jpg",
    title : "Fashion Shoes Sneaker",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :5
  },
  {
    imgPath: "images/product/product-3.jpg",
    title : "Mens White Slip Shoes",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :3,
  },
  {
    imgPath: "images/product/product-4.jpg",
    title : "Ladies Luxurious Bag",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :4,
  },
  {
    imgPath: "images/product/product-5.jpg",
    title : "Ladies Green Top",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :5,
  },
  {
    imgPath: "images/product/product-6.jpg",
    title : "Ladies Onepiece Wear",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :4,
  },
  {
    imgPath: "images/product/product-7.jpg",
    title : "Mens Brown Jacket",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :2,
  },
  {
    imgPath: "images/product/product-8.jpg",
    title : "Sweater T-Shirt",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :3,
  },
  {
    imgPath: "images/product/product-9.jpg",
    title : "Trendy T-Shirt",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :5,
  },
  {
    imgPath: "images/product/product-10.jpg",
    title : "Mens Sun Glasses",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :3,
  },
  {
    imgPath: "images/product/product-11.jpg",
    title : "Women White Low Heel Shoes",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :4,
  },
  {
    imgPath: "images/product/product-12.jpg",
    title : "Black Pant",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :3,
  }
]

const newProduct = [
  {
    imgPath: "images/product/product-1.jpg",
    title : "Black Print T-Shirt",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :3,
  },
  {
    imgPath: "images/product/product-2.jpg",
    title : "Fashion Shoes Sneaker",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :4,
  },
  {
    imgPath: "images/product/product-3.jpg",
    title : "Mens White Slip Shoes",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :3
  },
  {
    imgPath: "images/product/product-4.jpg",
    title : "Ladies Luxurious Bag",
    price : "$16.00",
    orignalPrice : "$21.00",
    rating :5
  }
]
function App() {
  return (
   <section>
   <Cta/>
  <Catalog data={cat}/>
  <Product dataSet={product}/>
  <Sale/>
  <PopularItems newProductData={newProduct}/>
  <Footer/>
   </section>
  );
}


export default App;
