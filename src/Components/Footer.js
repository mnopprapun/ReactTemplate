import React from "react";
import "/Users/mathawudnopprapun/Development/react/template/src/Components/Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      {/* <!-- Footer main --> */}
      <div class="ft-main">
        <div class="ft-main-item">
          <h2 class="ft-title">About</h2>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Resources</h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Contact</h2>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </div>
     </div>
      {/* <!-- Footer social --> */}
      <section class="ft-social">
        <ul class="ft-social-list">
          <li><a href="#">Facebook Icon</a></li>
          <li><a href="#">Twitter Icon</a></li>
          <li><a href="#">Social Media Icon</a></li>
        </ul>
      </section>
     
      {/* <!-- Footer legal --> */}
      <section class="ft-legal">
        <ul class="ft-legal-list">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2022 Copyright Company Inc.</li>
        </ul>
      </section>
    </div>
  );
}

export default Footer
