import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
  return (
    <Carousel 
      showArrows={true} 
      thumbWidth={200} 
      autoPlay={true} 
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      <div className="slider-content">
        <img 
          className="header-slider-images"
          src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc1446fda2f87e332/60134add9d2dcf0eda34fc8c/CB4_Launch_Keyart-Bnet-Home_Banner_Desktop_Home-2500x514.webp?auto=webp&format=pjpg" 
          alt="Slider-1" 
        />
      </div>
      <div className="slider-content">
        <img 
          className="header-slider-images"
          src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltf95e66c8dad15803/60184f7a1eee240b8da78820/OW_2021_LunarNewYear_Blizzard.comDesktop_2500x514_BS01.webp?auto=webp&format=pjpg"  
          alt="Slider-2" 
        />
      </div>
      <div className="slider-content">
        <img 
          className="header-slider-images"
          src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltab2c3ed873b8711f/601b64601eee240b8da789dc/BLZ_2021_LunarSale_HomepageDesktop_2500x514.jpg" 
          alt="Slider-3"
        />
      </div>
    </Carousel>
  )
}

export default Header
