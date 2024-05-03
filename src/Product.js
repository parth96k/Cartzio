import "./Product.css";
import {Rating} from "@mui/material"
export default function Product(props) {
  const db = props.dataSet;
  // console.log(db);
  return (
    <section className="product-section container-fluid" id="product">
      <div className="heading text-center pt-4 pb-4">
        <h3>New Arrival Products</h3>
        <p>Shop the latest products from the most popular collections</p>
      </div>

      <section className="product-pro row justify-content-lg-center">
        {db.map((i) => {
          return (
            <div className="col-md-4 col-lg-3 pb-4">
              <div className="product-image"><img src={i.imgPath} alt={i.title} className="rounded-3 border border-1"></img></div>
              <div>
                <p className="product-title">{i.title}</p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <p>{i.price}</p>
                    <p className="ps-1"><del className="orignal-price" >{i.orignalPrice}</del></p>
                  </div>
                  <div>
                  {/* <i className={i.rating}></i> */}
                  <Rating name="read-only" value={i.rating} readOnly />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
