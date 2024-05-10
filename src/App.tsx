import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import comftsofa from './images/comftsofa.png';
import luxbed from './images/luxbed.png';
import brownchair from './images/brownchair.png';
import bluesofa from './images/bluesofa.png';
import lamp from './images/lamp.png';
import woodenstuff from './images/woodenstuff.png';
import sofa from './images/sofa.png';
import greysofa from './images/greysofa.png';
import blog1 from './images/blog1.png';
import blog2 from './images/blog2.png';
import blog3 from './images/blog3.png';
import whitelamp from './images/whitlamp.png';
import divan from './images/divan.png';
import classyChair from './images/classychair.png';
import bluesofa2 from './images/bluesofa.png';
import bedflower from './images/bedflower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook,faInstagramSquare,faLinkedin, faPinterest,faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faBell ,faShoppingCart,
  faArrowUpRightFromSquare, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function App() {
  const buttonsData = [
    { image: comftsofa, tag: 'sofa' },
    { image: luxbed, tag: 'bed' },
    { image: brownchair, tag: 'dressor' },
    { image: bluesofa, tag: 'shelf' },
    { image: lamp, tag: 'lamp' },
    { image: woodenstuff, tag: 'decor' }
  ];
  const proData = [
    {image : sofa, tag : 'Comfortable Sofa', price: '$80.99'},
    {image : lamp, tag : 'Elegebt Side Table', price: '$80.99'},
    {image : greysofa, tag : 'Classy Padded Chair', price: '$80.99'},
  ];
  const blogData = [
    {image : blog1},
    {image : blog2},
    {image : blog3}
  ];
  const imgData = [
    {image: woodenstuff , tag : 'Wooden Shelf' , price : '$80.99'},
    {image: bluesofa , tag : 'Comfortable Sofa' , price : '$80.99'},
    {image: classyChair , tag : 'Classy Chair ' , price : '$80.99'},
    {image: luxbed , tag : 'Luxurious Bed' , price : '$80.99'},
    {image: whitelamp , tag : 'Stylish Lamp' , price : '$80.99'},
    {image: brownchair , tag : 'Classy Chair' , price : '$80.99'},
    {image: bedflower , tag : 'Stylish Bed' , price : '$80.99'},
    {image: comftsofa , tag : 'Comfortable Sofa' , price : '$80.99'},
    {image: divan , tag : 'Comfortable Divan' , price : '$80.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
      <div className="main">
        <div className="green-head w-auto">
          <p className='text-white text-center p-2'><FontAwesomeIcon icon={faBell} /> Enjoy 30% 0ff - Shop Now And Save Big!</p>
        </div>
        <div className="white-head w-auto d-flex justify-content-around align-items-center shadow-bottom">
          <div className="logo-name">
            <h5>furniLux</h5>
          </div>
          <div className="categ">
            <a className='navbar-brand pe-4' href="#">Home</a>
            <a className='navbar-brand pe-4' href="#">Categories</a>
            <a className='navbar-brand pe-4' href="#">About us</a>
            <a className='navbar-brand pe-4' href="#">Pages</a>
            <a className='navbar-brand pe-4' href="#">Contact us</a>
          </div>
          <div className="regist">
            <button type="button" className="btn">Log In</button>
            <button type="button" className='sign-btn'>Sign Up</button>
          </div>
        </div>
       </div>
       {/* first section */}
       <div className="background-image1 text-center white-head">
          <h1 className='brand'>FurniLux - Your Brand <br /> For Stylish Living</h1>
          <p className="pt-4" style={{ fontSize: '12px' }}>Discover a fusion of modern design and functionality,crafted to elevate every <br /> corner to your living space. FurniLux, redefining stylish living for you.</p>
          <button className='shop-btn white-head text-center rounded-pill m-3 px-3'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
          <div className="m-5 text-right white-head" id='imageContainer' style={{ fontSize: '12px' }}>
    {buttonsData.map((button, index) => (
      <button key={index} className='rounded border-0 px-3 py-2 mx-3'>
        <img src={button.image} alt={button.tag} /> {button.tag}
      </button>
    ))}
  </div>
       </div>
      </div>
       {/* second-sec */}
       <div className="my-5">
        <h1 className='white-head text-center py-5'>Elevate Your Living Room</h1>
        <div className="container">
          <div className="row shadow-bottom">
            {proData.map((product, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card border-0" style={{ cursor: 'pointer' }}>
                <img src={product.image} className="card-img-top" alt={product.tag} />
                <div className="card-body white-head d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title text-left mb-0">{product.tag}</h6>
                    <p className="card-text text-left mb-0" style={{ fontSize: '14px' }}>{product.price}</p>
                    </div>
                    <button className="btn border-0 bg-transparent">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                      </div>
                      </div>
                      </div>
                    ))}
                    </div>
                    </div>
                    </div>

       {/* third-sec */}
       <div className="third-sec white-head my-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="p-5 white-head">
                <h5 className='px-5'>Luxurious Bed</h5>
                <p className="px-5 mb-0 py-2" style={{fontSize: '12px'}}>Discover unparalleled comfort with our Luxurious bed. Elegant design, plush comfort.</p>
                <h6 className="px-5 py-2" style={{fontSize: '14px'}}>$200</h6>
                <button className='buy-btn text-white text-center rounded-pill px-3' style={{ fontSize: '10px', display: 'inline-block' }}>Buy Now<FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
            {/* Background Image */}
           <div className="col-lg-6 p-0">
            <div className="img2 position-relative">
            </div>
           </div>
          </div>
        </div>
      </div>

      {/* fourth-sec */}
      <div className="fourth-sec my-5">
        <div className="container white-head">
          <h1 className='text-center py-5'>All Products</h1>
          <div className="row ps-5">
            {imgData.map((img, index) => (
            <div key={index} className="col-4 col-md-4">
              <div className="card shadow-bottom" style={{ maxWidth: '18rem', marginBottom: '10px', border: 'none' }}>
                <img src={img.image} className="card-img-top" alt={`product ${index + 1}`} />
                <div className="card-body border-0 white-head d-flex justify-content-between align-items-center" style={{ padding: '10px' }}>
                  <div>
                    <h5 className="card-title">{img.tag}</h5>
                    <p className="card-text mb-0" style={{ fontSize: '14px' }}>{img.price}</p>
                    </div>
                    <button className="border-0 bg-transparent">
                      <FontAwesomeIcon icon={faShoppingCart} className='ps-1'/>
                      </button>
                      </div>
                      </div>
                      </div>
                    ))}
                    </div>
                    </div>
                    </div>

      {/* Fifth-sec */}
      <div className="container">
        <div className="sofaimg3">
          <div className="white-head pt-5 ps-3">
            <h5 className='sofa-desc'>"Incredibly happy with my new sofa! <br />
              Stylish,comfortable & exceeded my <br /> expectations.Seemless purshase & <br /> prompt delivery.
              Highly recommended!"</h5>
              <p>Marie Elisa</p>
          </div>
        </div>
        </div>

        {/* Sixth-sec */}
        <div className="sixth-sec white-head ms-5">
          <div className="container">
            <div className="my-5 text-center py-2">
              <h1>Blog & Insights</h1>
              <p>Explore our blog for Designing inspiration & Tips</p>
            </div>
            <div className="row px-4">
             {blogData.map((blog , index) =>(
              <div key={index} className="col-6 col-md-4" style={{ cursor: 'pointer' }}>
              <img src={blog.image} alt={`Blog ${index + 1}`} />
            </div>
             ))}
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer mt-5">
          <div className="container white-head d-flex">
            <div className='m-5'>
              <h5>furniLux</h5>
              <p className='' style={{fontSize: '10px'}}>Designing Dreams,Crafting Comfort</p>
              <div className="py-3 my-2">
                <h6><FontAwesomeIcon icon={faPhone} className='ps-1'/> +00 123 123 123</h6>
                <h6><FontAwesomeIcon icon={faEnvelope}/>furniLux@business.com</h6>
                <h6><FontAwesomeIcon icon={faLocationDot} className='ps-1'/> 132 Homest Land, Suite 456 Civil,United interiors</h6>
              </div>
            </div>
            <div className='m-5 w-25'>
              <h5>About Us</h5>
              <div className="py-4">
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> About Us</h6></a>
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> Blog</h6></a>
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> Contact Us</h6></a>
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> Popular Question</h6></a>
              </div>
            </div>
            <div className='m-5 w-25'>
              <h5>What's Popular</h5>
              <div className="py-4">
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> King Size Beds</h6></a>
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> Sofa</h6></a>
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> Chairs</h6></a>
                <a href="#"><h6><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ps-1'/> Decorated Lamps</h6></a>
              </div>
            </div>
            <div className='m-5'>
              <h5>Get 15% Off your first order!</h5>
              <p className='pt-2' style={{fontSize: '13px'}}>Subscribe our news letter & get discount on your first order! also receive updates & more</p>
              <div className="inp-container">
                <p className='class-placeholder border border-secondary rounded-pill p-1 ps-2'><FontAwesomeIcon icon={faEnvelope} className='ps-1'/> Email Address
                <button className='subs-btn text-white text-center rounded-pill px-3' style={{ fontSize: '12px' }}>Subscribe</button></p>
              </div>
            </div>
          </div>

          {/* footer-icons */}
          <div className="footer-icons white-head mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="text-left">
                  <div className="ms-5">
                  <a href="#"><FontAwesomeIcon icon={faSquareFacebook} className='p-1'/></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagramSquare} className='p-1'/></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} className='p-1'/></a>
                  <a href="#"><FontAwesomeIcon icon={faPinterest} className='p-1'/></a>
                  </div>
                  <p className='ps-5 py-3' style={{fontSize: '13px'}}>© 2023 FurniLux. All Rights Reserved</p>
                  </div>
                  </div>
                  </div>
                  </div>
           </div>
           </div>
      </header>
    </div>
  );
}

export default App;
