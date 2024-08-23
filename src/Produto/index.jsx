import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutos from '../components/ListarProdutos';

export default function Produto() {
    const produtos = [
        {
            id: 6,
            nome: 'New Razer Blade 14',
            precoantigo: 'US$2,800.00',
            preco: 'US$2,699.99',
            categoria: 'Computador',
            imagem: 'https://assets3.razerzone.com/2qIEzE6PovR0jcvcBUI6HVJQVKM=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhaf%2Fh7b%2F9720377704478%2Fblade14-p10-black-500x500.png'
        },
        {
            id: 7,
            nome: 'Razer Nommo V2 Pro',
            preco: 'US$449.99',
            categoria: 'Som',
            imagem: 'https://assets3.razerzone.com/p-xW6-mBJouL1xogG6rztr_907M=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh98%2Fh81%2F9522168954910%2Fnommo-v2-pro-500x500.png'
        },
        {
            id: 8,
            nome: 'Razer Kitsune SF6 Fighters Edition: Akuma',
            precoantigo: 'US$542.00',
            preco: 'US$329.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/StxRy5_zCT8H5S7eQuZ-meH1Mfk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhab%2Fh36%2F9795071705118%2Fkitsune-akuma-500x500.png'
        },
        {
            id: 9,
            nome: 'Razer BlackWidow V4 Pro - Orange Switch - US - Black',
            preco: 'US$229.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/YtWqr12prPepbUlakSh52LMFXmU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2a%2Fhd3%2F9538807103518%2Fblackwidow-v3-black-5-500x500.png'
        },
        {
            id: 10,
            nome: 'Razer THS Case for AirPods Pro - Mercury',
            precoantigo: 'US$100.00',
            preco: 'US$29.99',
            categoria: 'Fones',
            imagem: 'https://assets3.razerzone.com/OYnGJDH-3i1b3IyvrjN50o8Sy3M=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhed%2Fh5f%2F9083804614686%2Frazer-ths-case-airpods-pro-500x500-mercury.png'
        },
        {
            id: 11,
            nome: 'Razer Enki X - Hello Kitty and Friends Edition',
            precoantigo: 'US$700.00',
            preco: 'US$549.99',
            categoria: 'Cadeiras',
            imagem: 'https://assets3.razerzone.com/cZTbaCopHXzI6nfxxp7A1EgpWVc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh16%2Fhcd%2F9797396791326%2Fenki-x-hello-kitty-2-500x500.png'
        },
        {
            id: 12,
            nome: 'Razer Tomahawk Mini-ITX',
            precoantigo: 'US$256.00',
            preco: 'US$137.99',
            categoria: 'Som',
            imagem: 'https://assets3.razerzone.com/cvyooubDVnQyBiJhYTp-6X7OX0s=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha0%2Fh42%2F9090917531678%2F500x500-tomahawk-mini-ITX.png'
        },
        {
           id: 13,
            nome: 'Razer Hanbo Chroma RGB AIO Liquid Cooler 240MM (aRGB Pump Cap)',
            precoantigo: 'US$350.00',
            preco: 'US$179.99',
            categoria: 'Memórias',
            imagem: 'https://assets3.razerzone.com/3kJfciU6Cz2rOOHyXoof_AKGRVw=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh41%2Fhed%2F9311160401950%2F500x500-hanbo-aio-240.png'
        },
        {
            id: 14,
            nome: 'Razer Huntsman Mini Analog - US',
            preco: 'US$79.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/Z8xauPSe9BNTB8CGmSAQ9bCsg98=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh95%2Fh70%2F9533910712350%2Fhuntsman-mini-analog-4-500x500.png'
        },
        {
            id: 15,
            nome: 'Razer Seiren V2 Pro',
            preco: 'US$99.99',
            categoria: 'Microfones',
            imagem: 'https://assets3.razerzone.com/k7N35IrJgVggZvN42zWnCxIPDzQ=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh33%2Fhe7%2F9488900587550%2Fseiren-v2-pro-2-500x500.png'
        },
        {
            id: 16,
            nome: 'Razer Seiren V2 X',
            precoantigo: 'US$100.00',
            preco: 'US$49.99',
            categoria: 'Microfones',
            imagem: 'https://assets3.razerzone.com/oO9sykurl6jknVGVhF7oU4rbJBQ=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6c%2Fhf1%2F9488900882462%2Fseiren-v2-x-2-500x500.png'
        },
        {
            id: 17,
            nome: 'Razer Seiren BT',
            preco: 'US$59.99',
            categoria: 'Microfones',
            imagem: 'https://assets3.razerzone.com/T_4rQHLuxB3U4YukEJ_ooKHEum0=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fh59%2F9394153160734%2Fseiren-bt-3-500x500.png'
        },
        {
            id: 18,
            nome: 'Razer Firefly V2 Pro - White',
            preco: 'US$99.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/LuY7dcpYqhgvLQZ7M_OiREvy5nI=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh27%2Fh48%2F9763779411998%2Ffirefly-v2-pro-white-2-500x500.png'
        },
        {
            id: 19,
            nome: 'Razer Basilisk V3 Pro - White',
            precoantigo: 'US$200.00',
            preco: 'US$129.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/R_mUwg_U6WlDyPedCYFIJ4XQAXM=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5f%2Fhba%2F9529652314142%2Fbasilisk-v3-pro-white-2-500x500.png'
        },
        {
            id: 20,
            nome: 'Razer Ornata V3 Tenkeyless - US - Hello Kitty and Friends Edition',
            preco: 'US$29.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/KUhRzviCe43ahACN6TdzWZ7Xk4k=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8d%2Fhcb%2F9796329373726%2Fornata-v3-tenkeyless-hello-kitty-500x500.png'
        },
        {
            id: 21,
            nome: 'Razer Enki X - Hello Kitty and Friends Edition',
            precoantigo: 'US$700.00',
            preco: 'US$549.99',
            categoria: 'Periféricos para jogos',
            imagem: 'https://assets3.razerzone.com/cZTbaCopHXzI6nfxxp7A1EgpWVc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh16%2Fhcd%2F9797396791326%2Fenki-x-hello-kitty-2-500x500.png'
        },
        {
            id: 22,
            nome: 'Razer Enki Pro',
            precoantigo: 'US$1500.00',
            preco: 'US$999.99',
            categoria: 'Cadeiras',
            imagem: 'https://assets3.razerzone.com/U1JIhhwzyw0Yl3qK8XNG805ppD4=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh15%2Fh72%2F9407543672862%2Fenki-pro-500x500.png'
        },
        {
            id: 23,
            nome: 'Razer Fujin Pro',
            preco: 'US$1,049.99',
            categoria: 'Cadeiras',
            imagem: 'https://assets3.razerzone.com/zBVl6SP4YuCJSBvI1kzVcgslfGQ=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh43%2Fh20%2F9660298100766%2Ffujin-pro-500x500.png'
        },
        {
            id: 24,
            nome: 'Razer Fujin',
            preco: 'US$649.99',
            categoria: 'Cadeiras',
            imagem: 'https://assets3.razerzone.com/SiLJVnrEXfEQJIeCkzbvLdtSBV0=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh1f%2F9660298133534%2Ffujin-500x500.png'
        },
        {
            id: 25,
            nome: 'Razer Fujin Headrest',
            preco: 'US$129.99',
            categoria: 'Cadeiras',
            imagem: 'https://assets3.razerzone.com/BzGU9UOkJISv_LYrKA7Q2Bvf7LU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh62%2Fh40%2F9660294397982%2Ffujin-headrest-500x500.png'
        }
    ];

    return (
        <div>
            <Header />

            <h1 className='verde'>SCRATCH RESISTANCE</h1>
            <h3 className='branco'>Extra Protection</h3>
            <h4 className='cinza'>Made of premium cast vinyl, Razer Products are built to take the hits and keep going—capable of withstanding the hazards of daily use to keep your device looking sharp.</h4>
            <div className='imagemm'>
                <img src='https://assets2.razerzone.com/images/pnx.assets/5e6f5561d926b339efd717242db87776/razer-skins-usp-scratch-resistance-desktop.jpg'/>
            </div>
            
            <ListarProdutos produtos={produtos} />
        <Footer/>
        </div>
    );
}
