import DisplaySneakers from "../components/Display/DisplaySneakers"
import MyCarousel from "../components/Additionals/MyCarousel"
import ProductReviews from "../components/Additionals/ProductReviews"
import ShopCategory from "../components/Additionals/ShopCategory"

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