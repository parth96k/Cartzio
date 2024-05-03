import "./Footer.css";

export default function Footer() {
  let copyrightDate = new Date();
  const year = copyrightDate.getFullYear();

  const footerLogo = "./images/footer/logo-light.png";
  return (
    <section className="footer-section container-fluid px-lg-4" id="contact">
      <section className="row pt-5 footer-inner">
        <div className="extreme-left col-12 col-lg-4 ps-0 pb-4">
          <div className="footer-logo pb-4">
            <img src={footerLogo} alt="footer-logo"></img>
          </div>
          <div>
            <p className="footer-para">
              Upgrade your style with our curated sets. Choose confidence,
              embrace your unique look.
            </p>
          </div>
          <div className="d-flex">
          <div className="social-footer"><a href="/"><i class="bi bi-cart2 socail-cart"></i></a></div>
          <div className="social-footer"><a href="/"><i class="fa-brands fa-linkedin-in"></i></a></div>
          <div className="social-footer"><a href="/"><i class="fa-brands fa-facebook-f"></i></a></div>
          <div className="social-footer"><a href="/"><i class="bi bi-instagram"></i></a></div>
          <div className="social-footer"><a href="/"><i class="fa-brands fa-twitter"></i></a></div>
          <div className="social-footer"><a href="/"><i class="bi bi-dribbble"></i></a></div>
          </div>
        </div>
        <div className="center-center col-12 col-lg-4">
          <div className="row">
            <p className="text-white fw-semibold">Shopping & Clothes</p>
            <div className="col-12 col-md-4">
            <ul className="text-white footer-ul">
                <li className="pb-3"><a href="/" className="text-reset">Men</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Jackets&Coats</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Jeans</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Loungewear</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Polo Shirts</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Shirts</a></li>
            </ul>
            </div>
            <div className="col-12 col-md-4">
            <ul className="text-white footer-ul">
                <li className="pb-3"><a href="/" className="text-reset">Shorts</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Suit Swimwear</a></li>
                <li className="pb-3"><a href="/" className="text-reset">T-shirts</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Tracksuits</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Trousers</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Shirts</a></li>
            </ul>
            </div>
            <div className="col-12 col-md-4">
            <ul className="text-white footer-ul">
                <li className="pb-3"><a href="/" className="text-reset">My Account</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Order History</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Wish List</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Newsletter</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Affiliate</a></li>
                <li className="pb-3"><a href="/" className="text-reset">Returns</a></li>
            </ul>
            </div>
          </div>
        </div>
        <div className="extreme-right col-12 col-lg-4 text-white">
          <p className="text-white fw-semibold">NewsLetter</p>
          <p className="pe-lg-3">Sign Up and receive the latest tips via emails</p>
          <p>Write your email <span className="text-danger">*</span></p>
        <input type="email" placeholder="Email" className="email-footer"></input>
        <button type="button" className="d-block footer-button">Subscribe</button>
        </div>
      </section>
      <section className="footer-service container mt-5 py-4 text-lg-center">
        <div className="row text-white">
            <div className="col-md-6 col-lg-3 pb-2">
                <div>
                <i class="fa-solid fa-truck-fast me-1"></i>  Free Delivery
                </div>
            </div>
            <div className="col-md-6 col-lg-3 pb-2">
                <div>
                <i class="fa-solid fa-box-archive me-1"></i>    Non-contact shipping
                </div>
            </div>
            <div className="col-md-6 col-lg-3 pb-2">
                <div>
                <i class="bi bi-wallet2 me-1"></i>    Money-back guarantee
                </div>
            </div>
            <div className="col-md-6 col-lg-3 pb-2">
                <div>
                <i class="bi bi-shield-fill-check me-1"></i> Secure payments
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="copyright text-center py-5">
          © <span>{year}</span> Cartzio. All rights reserved | Design by <span>Parth</span>
        </div>
      </section>
    </section>
  );
}
