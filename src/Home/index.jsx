import { useState } from "react";
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'produto a', preco: 'US$129.99'},
        {id: 2, nome: 'produto b', preco: 'US$179.00'},
        {id: 3, nome: 'produto c', preco: 'US$149.99'}
    ])

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
                  <img src="https://assets2.razerzone.com/images/pnx.assets/9aaa4c7d3671f1b1a5f916f45569205c/intel-gamer-days-2024-homepage-desktop2x.webp"></img>
                </div>
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/3a6dc2c039b79f5aca6990ae15221b35/the-razer-huntsman-v3-pro-line-hero-desktop.webp"></img>
                </div>
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/9aaa4c7d3671f1b1a5f916f45569205c/razer-kraken-v4-homepage-desktop2x.webp"></img>
                </div>
            </Carousel>
            <br></br>
            <br></br>

            <h1 className="rosa">SAY HELLO TO THE COLLECTION</h1>
            <br></br>
            <h4 className="cinza">Looking for the cutest Hello Kitty gaming gear ever? You’ve found them! Capture your most precious gaming moments with a setup that's never short on adorable allies.</h4>
            <br></br>
            <div className="imagem">
                <img src="https://assets2.razerzone.com/images/pnx.assets/29296c4e884390faba0239b7d4d7cecd/hello-kitty-and-friends-keyboard-desktop.webp"/>
            </div>

            <div>
            {
                listaProdutos.map((produto)=>
                <div key={produto.id}>
                <h1>{produto.nome}</h1>
                <p>{produto.preco}</p>
                </div>)
            }
            </div>
        </>
    );
}