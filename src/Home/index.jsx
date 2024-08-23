import { useState } from "react";
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../components/Footer";
import ListarProdutos from "../components/ListarProdutos";

export default function Home() {

    const [produtos] = useState([
        {
            id: 1,
            nome: 'Razer Basilisk V3 Pro - Black',
            preco: 'US$129.99',
            imagem: "https://assets3.razerzone.com/XianHhS4aWPIr4UJLTatssIfkZI=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha0%2Fhb6%2F9529652445214%2Fbasilisk-v3-pro-black-2-500x500.png"
        },
        {
            id: 2,
            nome: 'Razer Naga V2 Pro',
            preco: 'US$179.99',
            imagem: "https://assets3.razerzone.com/OrGvLdu5Zv02H5kMRLaPiGmhmPg=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb2%2Fhb9%2F9529652379678%2Fnaga-v2-pro-2-500x500.png"
        },
        {
            id: 3,
            nome: 'Razer DeathAdder V3 Pro - Black - Classic Base - 1000 Hz',
            preco: 'US$149.99',
            imagem: "https://assets3.razerzone.com/vjg5qK3y0VjX6fDNGV7PGut0r0c=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc9%2Fh51%2F9449963946014%2Fdeathadder-v3-pro-black-v2-500x500.png"
        },
        {
            id: 4,
            nome: 'Razer Kraken Kitty V2 BT - Hello Kitty and Friends Edition',
            preco: 'US$139.99',
            imagem: "https://assets3.razerzone.com/4bphiLjZ-zcYWv2PkFhISgu4gaw=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh25%2Fhc8%2F9796329275422%2Fkraken-kitty-v2-bt-hello-kitty-500x500.png"
        },
        {
            id: 5,
            nome: 'Razer Kraken V4',
            preco: 'US$179.99',
            imagem: "https://assets3.razerzone.com/T92w15ek3fXhe4ZZ2dpPvxb-1XQ=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhec%2Fhab%2F9806610333726%2Fkraken-v4-500x500.png"
        }
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
                  <img src="https://assets2.razerzone.com/images/pnx.assets/9aaa4c7d3671f1b1a5f916f45569205c/razer-kraken-v4-homepage-desktop2x.webp"></img>
                </div>
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/9aaa4c7d3671f1b1a5f916f45569205c/intel-gamer-days-2024-homepage-desktop2x.webp"></img>
                </div>
                <div>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/19139469bcc62860c37806cc9355cdf1/razer-huntsman-v3-pro-line-homepage-desktop2x.webp"></img>
                </div>
            </Carousel>
            <br></br>
            <br></br>

            <h1 className="rosa">SAY HELLO TO THE COLLECTION</h1>
            <br></br>
            <h4 className="cinza">Looking for the cutest Hello Kitty gaming gear ever? You’ve found them! Capture your most precious gaming moments with a setup that's never short on adorable allies.</h4>
            <br></br>
            <div className="imagemm">
                <img src="https://assets2.razerzone.com/images/pnx.assets/29296c4e884390faba0239b7d4d7cecd/hello-kitty-and-friends-keyboard-desktop.webp"/>
            </div>

            <ListarProdutos produtos={produtos} />
        <Footer/>
        </>
    );
}