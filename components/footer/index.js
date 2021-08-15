import Logo from '../../assets/icons/logo';

const Footer = ({ onTop }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo onTop={false}/></h6> 
            <p>Veja meus trabalhos nas redes sociais!</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook "></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/karinasantello_handlettering/"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">store@uikit.com</a></li>
              <li><a href="#">Hotline: +1 131 138 138</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};


export default Footer