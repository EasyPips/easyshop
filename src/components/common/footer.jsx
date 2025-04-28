function Footer() {

    const year = new Date(); 
    return (
      <footer className="bg-orange-400 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">MyShop</h2>
            <p className="text-sm">
              Your one-stop shop for all the latest and greatest products. We are committed to delivering quality and service.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Men's Fashion</a></li>
              <li><a href="#" className="hover:underline">Women's Fashion</a></li>
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
  
  
        </div>
  
        <div className="border-t border-white mt-8 pt-4 text-center text-sm">
          © {year.getFullYear()} MyShop. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  