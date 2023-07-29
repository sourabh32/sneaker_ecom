import DisplaySneakers from "../components/DisplaySneakers"
import MyCarousel from "../components/MyCarousel"
import ProductReviews from "../components/ProductReviews"
import ShopCategory from "../components/ShopCategory"

const Home = () => {
  return (
    <>
    <MyCarousel />
    <DisplaySneakers />
    <ShopCategory />
    <ProductReviews />
    </>
  )
}

export default Home