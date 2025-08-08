import Barra from "../Layout/Barra.jsx";
import Footer from "../Layout/Footer.jsx";
import '../Styles/Default.css';
function NewSeal() {
    return (
        <div className="pagina">
            <Barra name='Antonio Garza' />
            <div className="contenido">
                <h1>Nueva Venta</h1>

            </div>
            <Footer />
        </div>
    );
}

//<Login/>
export default NewSeal