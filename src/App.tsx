import { FAQs } from "./components/FAQs"
import { Footer } from "./components/Footer"
import Hero from "./components/Hero"
import Home from "./components/Home"
import MyFeaturedCards from "./components/MyFeaturedCards"

const App = () => {
  return (
    <div className="bg-gray-900">
      <Home />
      <Hero />
      <MyFeaturedCards />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App