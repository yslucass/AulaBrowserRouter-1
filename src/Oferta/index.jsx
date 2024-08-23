import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Oferta(){

        const ofertas = [
            {
                id: 6,
            nome: 'New Razer Blade 14',
            precoantigo: 'US$2,800.00',
            preco: 'US$2,699.99',
            imagem: 'https://assets3.razerzone.com/2qIEzE6PovR0jcvcBUI6HVJQVKM=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhaf%2Fh7b%2F9720377704478%2Fblade14-p10-black-500x500.png'
            },
            {
                id: 8,
            nome: 'Razer Kitsune SF6 Fighters Edition: Akuma',
            precoantigo: 'US$542.00',
            preco: 'US$329.99',
            imagem: 'https://assets3.razerzone.com/StxRy5_zCT8H5S7eQuZ-meH1Mfk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhab%2Fh36%2F9795071705118%2Fkitsune-akuma-500x500.png'
            },
            {
                id: 10,
            nome: 'Razer THS Case for AirPods Pro - Mercury',
            precoantigo: 'US$100.00',
            preco: 'US$29.99',
            imagem: 'https://assets3.razerzone.com/OYnGJDH-3i1b3IyvrjN50o8Sy3M=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhed%2Fh5f%2F9083804614686%2Frazer-ths-case-airpods-pro-500x500-mercury.png'
            },
            {
                id: 11,
            nome: 'Razer Enki X - Hello Kitty and Friends Edition',
            precoantigo: 'US$700.00',
            preco: 'US$549.99',
            imagem: 'https://assets3.razerzone.com/cZTbaCopHXzI6nfxxp7A1EgpWVc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh16%2Fhcd%2F9797396791326%2Fenki-x-hello-kitty-2-500x500.png'
            },
            {
                id: 12,
            nome: 'Razer Tomahawk Mini-ITX',
            precoantigo: 'US$256.00',
            preco: 'US$137.99',
            imagem: 'https://assets3.razerzone.com/cvyooubDVnQyBiJhYTp-6X7OX0s=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha0%2Fh42%2F9090917531678%2F500x500-tomahawk-mini-ITX.png'
            },
            {
                id: 13,
            nome: 'Razer Hanbo Chroma RGB AIO Liquid Cooler 240MM (aRGB Pump Cap)',
            precoantigo: 'US$350.00',
            preco: 'US$179.99',
            imagem: 'https://assets3.razerzone.com/3kJfciU6Cz2rOOHyXoof_AKGRVw=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh41%2Fhed%2F9311160401950%2F500x500-hanbo-aio-240.png'
            },
            {
                id: 16,
            nome: 'Razer Seiren V2 X',
            precoantigo: 'US$100.00',
            preco: 'US$49.99',
            imagem: 'https://assets3.razerzone.com/oO9sykurl6jknVGVhF7oU4rbJBQ=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6c%2Fhf1%2F9488900882462%2Fseiren-v2-x-2-500x500.png'
            },
            {
                id: 19,
            nome: 'Razer Basilisk V3 Pro - White',
            precoantigo: 'US$200.00',
            preco: 'US$129.99',
            imagem: 'https://assets3.razerzone.com/R_mUwg_U6WlDyPedCYFIJ4XQAXM=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5f%2Fhba%2F9529652314142%2Fbasilisk-v3-pro-white-2-500x500.png'
            },
            {
                id: 21,
            nome: 'Razer Enki X - Hello Kitty and Friends Edition',
            precoantigo: 'US$700.00',
            preco: 'US$549.99',
            imagem: 'https://assets3.razerzone.com/cZTbaCopHXzI6nfxxp7A1EgpWVc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh16%2Fhcd%2F9797396791326%2Fenki-x-hello-kitty-2-500x500.png'
            },
            {
                id: 22,
            nome: 'Razer Enki Pro',
            precoantigo: 'US$1500.00',
            preco: 'US$999.99',
            imagem: 'https://assets3.razerzone.com/U1JIhhwzyw0Yl3qK8XNG805ppD4=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh15%2Fh72%2F9407543672862%2Fenki-pro-500x500.png'
            }
        ]

    return(
        <div>
            <Header/>
            <h1 className="verde">OFFERS</h1>
            <div className="imagemm">
                <img src="https://assets2.razerzone.com/images/pnx.assets/ba0d3f607bb38db98fce07b5705497c9/customs_2022_1920x400_pdpbanner.jpg"/>
            </div>

            <div className="lista-produtos">
    {ofertas.map((produto) => (
        <div key={produto.id} className="card-produto">
            <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
            <p className="nome-produto">{produto.nome}</p>
            <p className='preco-antigo'>{produto.precoantigo}</p>
            <p className="preco-produto">{produto.preco}</p>
            <button className="botao">Buy</button>
        </div>
    ))}
</div>
        <Footer/>
        </div>
    );
}