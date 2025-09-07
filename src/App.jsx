import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import BlockSection from './components/BlockSection'
import BannerSlider from './components/BannerSlider'
import MultiItemSlider  from './components/MultiItemSlider'
// import SplitSection from "./components/SplitSection";



function App() {
  useEffect(() => {
    // Lazy Loading Logic
    const lazyImages = document.querySelectorAll("img.lazy");

    lazyImages.forEach((img) => {
      const highRes = img.getAttribute("data-src");
      const tempImg = new Image();
      tempImg.src = highRes;

      tempImg.onload = function () {
        img.src = highRes;
        img.classList.remove("loading");
      };
    });
  }, []);

  return (
    <>
      <BannerSlider/>
      <Header />
      <Banner/>
      <BlockSection/>
      <MultiItemSlider />

      

      {/* Image + Text Section */}
      <section>
        <div className='container'>
          <div className="split-section">
            <div className="text">
              <h2>About Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vel posuere ligula. Nam vitae mauris vel odio varius
                pretium. In hac habitasse platea dictumst. Donec eget lorem nec
                orci.
              </p>
            </div>
            <img
              src="/placeholder.jpg"
              data-src="/img3.jpg"
              alt="About"
              className="lazy loading"
            />
          </div>
        </div>
      </section>

    </>
  )
}

export default App
