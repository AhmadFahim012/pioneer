import About from "./components/About"
import AddToCart from "./components/AddToCart"
import Favorites from "./components/Favorites"
import Home from "./components/Home"
import NewArrivals from "./components/NewArrivals"
import Newsletter from "./components/Newsletter"
import OurCollection from "./components/OurCollection"
import OurCustomer from "./components/OurCustomer"
import SearchBar from "./components/SearchBar"
import ShopByCategory from "./components/ShopByCategory"
import TopSellingGarment from "./components/TopSellingGarment"
import WhyChooseUs from "./components/WhyChooseUs"
import Footer from "./layout/Footer"
import Header from "./layout/Header"


function App() {

  return (
    <>
    <Header />
    <Home />
    <ShopByCategory />
    <About />
    <OurCollection/>
    <NewArrivals />
    <TopSellingGarment />
    <WhyChooseUs />
    <OurCustomer />

    <Newsletter />
    <Footer />
    </>

  )
}

export default App
