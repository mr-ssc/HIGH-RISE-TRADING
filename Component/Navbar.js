import Logo from './Logo';
import "../Component/Navbar.css"

const Navbar = () => {
  const productCategories = [
    'Mechanical Products',
    'Electrical Products',
    'Oil and Gas Products',
    'Tubefit',
    'Valve Products',
    'Plumbing Materials',
    'Safety Items',
    'Sanitary Ware',
    'Plywood Items'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        
        <div className="nav-links">
          <a href="/">Home</a>
          <div className="dropdown">
            <button className="dropbtn">Products</button>
            <div className="dropdown-content">
              {productCategories.map((category, index) => (
                <a key={index} href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {category}
                </a>
              ))}
            </div>
          </div>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;