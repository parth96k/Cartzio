import "./Cta.css";

export default function Cta() {
  const logoImage = "images/cta-page/logo.png";
  const profileImage = "images/cta-page/profile.jpg";
  return (
    <section className="container-fluid cta-section p-0" id="home">
      <section className="whole-nav-section py-3 d-flex justify-content-between">
        <div className="logo-image">
          <a href="/"><img src={logoImage} alt="logo"></img></a>
        </div>
        <div className="bignav">
          <nav className="nav-section d-none d-lg-block">
            <ul className="nav justify-content-center justify-content-lg-between">
              <li className="nav-item " id="nav-home">
                <a className="nav-link text-reset" href="#home">
                  Hero <i className="bi bi-caret-down-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#catalog">
                  Products <i className="bi bi-caret-down-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#product">
                  Shop <i className="bi bi-caret-down-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#pages">
                  Pages <i className="bi bi-caret-down-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#sale">
                  Sale <i className="bi bi-caret-down-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-icons-div d-flex justify-content-evenly justify-content-md-center">
          <div className="me-1">
            <i className="bi bi-search"></i>
          </div>
          <div className="nav-icons me-1">
            <a href="/"><i className="bi bi-cart2"></i></a>
          </div>
          <div className="nav-icons me-1">
          <a href="/"><i className="bi bi-heart"></i></a>
          </div>
          <div className="profile-image ">
           <a href="/"> <img src={profileImage} alt=""></img></a>
          </div>
        </div>
        <div className="d-lg-none">
          <button type="button" className="bar-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="bi bi-list"></i></button>
        </div>

    <div className="offcanvas offcanvas-end"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
     <div className="offcanvas-header border-bottom">
    <h5 className="offcanvas-title " id="offcanvasExampleLabel">Cartzio</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body show fade">
    <div>
    <ul>
      <li data-bs-dismiss="offcanvas" className="canvas-list"><a href="#home" >Home</a></li>
      <li data-bs-dismiss="offcanvas" className="canvas-list"><a href="#catalog">Products</a></li>
      <li data-bs-dismiss="offcanvas" className="canvas-list"><a href="#product">Shop</a></li>
      <li data-bs-dismiss="offcanvas" className="canvas-list"><a href="#pages">Pages</a></li>
      <li data-bs-dismiss="offcanvas" className="canvas-list"><a href="#sale">Sale</a></li>
      <li data-bs-dismiss="offcanvas" className="canvas-list"><a href="#contact">Contact</a></li>

    </ul>
    </div>
    
  </div>
</div>
      </section>

      <section className="below-nav-section container px-0">
      <div className="below-nav-section-div text-center">
      <p className="text-uppercase">new collection</p>
      <h2>The Gift Suite</h2>
      <p className="pb-md-2">Our latest collection of essentail basics.</p>
      <button type="button" className="page-button rounded-3" >Shop Now<i className="bi bi-arrow-right-short ms-1"></i></button>
      </div>
      </section>
    </section>
  );
}
