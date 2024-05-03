import "./Sale.css";

export default function Sale() {

     const endDate = new Date("2024-05-31T23:59:59").getTime();
     const countdownInterval = setInterval(updateCountdown, 1000);
 
     function updateCountdown() {
       const now = new Date().getTime();
       const timeRemaining = endDate - now;
 
       if (timeRemaining <= 0) {
         clearInterval(countdownInterval);
         document.getElementById("countdown").innerHTML = "Sale has ended!";
       } else {
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
 
         document.getElementById("x1").innerHTML =`${days}</br>DAYS`;
         document.getElementById('x2').innerHTML =`${hours}</br>HOURS`;
         document.getElementById('x3').innerHTML =`${minutes}</br>MINS`;
         document.getElementById('x4').innerHTML =`${seconds}</br>SECS`;
       }
     }
  return (
    <section className="sale-section container-fluid mt-5 d-flex justify-content-center align-items-center mb-5" id="sale">
      <section className="container ">
        <div className="row">
          <div className="text-center">
            <h3 className="sale-heading">End of Season Clearance Sale Upto 30%</h3>
          </div>
          <div className="d-flex justify-content-evenly justify-content-md-center flex-wrap mt-3">
            <div id="x1" className="px-3 py-1 py-md-2 text-white fw-bold rounded-2 text-center me-md-2"></div>
            <div id="x2" className="px-3 py-1 py-md-2  text-white fw-bold rounded-2 text-center me-md-2"></div>
            <div id="x3" className="px-3 py-1 py-md-2  text-white fw-bold rounded-2 text-center me-md-2"></div>
            <div id="x4" className="px-3 py-1 py-md-2  text-white fw-bold rounded-2 mt-3 mt-md-0 text-center me-md-2"></div>
          </div>
          <div className="text-center pt-3">
            <button type="button" className="sale-button py-2 px-3 mt-3 rounded-3 fw-bold"><i class="bi bi-cart3 me-1"></i>Shop Now</button>
          </div>
        </div>
      </section>
    </section>
  );
}
