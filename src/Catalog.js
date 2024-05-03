import "./Catalog.css";

export default function Catalog(props) {
  let items = props.data;
  // console.log(items);
  return (
    <section className="catalog-section container-fluid pt-5" id="catalog">
      <div className="heading text-center pt-4">
        <h3>Shop The Collections</h3>
        <p>Shop the latest products from the most popular collections</p>
      </div>
      <section className="row justify-content-lg-center px-lg-5">
      {items.map((x) => {
        return (
            <div className="col-md-4 col-lg-2 catalog-menu">
              <div className="catalog-img-div">
                <img src={x.imgAdd} alt={x.name} title={x.name}></img>
              </div>
              <div className="text-center pt-2 pb-4"><h5 className="catalog-name">{x.name}</h5></div>
            </div>
        );
      })}
      </section>
    </section>
  );
}
