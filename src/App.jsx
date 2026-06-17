import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="cookie-bar">
        We use cookies to provide and improve our services. By using our site,
        you consent to cookies.
      </div>

      <div className="cards-container">
        <Card
          title="The Christmas Shop"
          items={[
            "Gifts for Everyone",
            "Christmas Decorations",
            "Stocking Fillers",
            "Food & Drink",
          ]}
        />

        <Card
          title="Device Deals"
          items={[
            "Fire HD 8",
            "Echo Spot",
            "Fire TV Stick",
            "Kindle",
          ]}
        />

        <Card
          title="Deals of the Day"
          items={[
            "Hair Curler",
            "Hair Dryer",
            "Headphones",
            "Smart Watch",
          ]}
        />

        <div className="signin-card">
          <h2>Sign in for your best experience</h2>

          <button>Sign in securely</button>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt="promotion"
          />
        </div>
      </div>
    </>
  );
}

export default App;