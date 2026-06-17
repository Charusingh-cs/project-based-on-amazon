function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          amazon<span>.in</span>
        </div>

        <div className="search-bar">
          <select>
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
          />

          <button>🔍</button>
        </div>

        <div className="nav-links">
          <span>Hello, Sign in</span>
          <span>Prime</span>
          <span>Your Lists</span>
          <span>🛒 Cart</span>
        </div>
      </nav>

      <div className="sub-nav">
        <p>☰ All</p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </>
  );
}

export default Navbar;