import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    return (
        <>
            <Header/>
            <h1>Home</h1>
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
                  <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-12/8257_1920x504_FULL.gif"></img>
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-12/8257_1920x504_FULL.gif"></img>
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-12/8257_1920x504_FULL.gif"></img>
                </div>


            </Carousel>
        </>
    );
}