import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    return (
        <>
            <Header/>
            <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight
            >
                <div>
                  <img src="https://assets2.razerzone.com/images/pnx.assets/debdc7d314c729fcb4ac51fff512d021/fujin-line-hero.webp"></img>
                </div>
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/3a6dc2c039b79f5aca6990ae15221b35/the-razer-huntsman-v3-pro-line-hero-desktop.webp"></img>
                </div>
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/2e5471e2ffe18edd8232bbcead4fa1a6/razer-blade-18-2024-hero-desktop.webp"></img>
                </div>
            </Carousel>
        </>
    );
}