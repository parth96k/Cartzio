import "./PopularItems.css";
import {Rating} from "@mui/material"
export default function PopularItems(props) {
  const dbnew = props.newProductData;
  console.log(dbnew);
  return (
    <section className="popular-section container-fluid" id="pages">
      <section className="container text-center text-md-start">
        <div className="heading  pt-4 pb-4">
          <h3>Popular Items</h3>
          <div className="d-md-flex justify-content-between">
            <p className="text-black">Popular items in this week</p>
            <p className="text-start">
              See More Items
              <i className="bi bi-arrow-right-short text-black"></i>
            </p>
          </div>
        </div>
        <section className="product-new row justify-content-lg-center">
          {dbnew.map((i) => {
            return (
              <div className="col-md-4 col-lg-3 pb-4">
                <div className="product-image">
                  <img
                    src={i.imgPath}
                    alt={i.title}
                    className="rounded-3 border border-1"
                  ></img>
                </div>
                <div>
                  <p className="product-title">{i.title}</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>{i.price}</p>
                      <p className="ps-1">
                        <del className="orignal-price">{i.orignalPrice}</del>
                      </p>
                    </div>
                    <div> <Rating name="read-only" value={i.rating} readOnly /></div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
}
