import Barra from "../Layout/Barra.jsx";
import Footer from "../Layout/Footer.jsx";
import '../Styles/Default.css';
function Inventario() {
    return (
        <div className="pagina">
            <Barra name='Antonio Garza' />
            <div className="contenido">
                <h1>Inventario</h1>

            </div>
            <Footer />
        </div>
    );
}

//<Login/>
export default Inventario