import Barra from "../Layout/Barra.jsx";
import Footer from "../Layout/Footer.jsx";
import '../Styles/Default.css';
function Apartados() {
    return (
        <div className="pagina">
            <Barra name='Antonio Garza' />
            <div className="contenido">
                <h1>Apartados</h1>

            </div>
            <Footer />
        </div>
    );
}

//<Login/>
export default Apartados