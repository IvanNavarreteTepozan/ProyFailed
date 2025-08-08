import PropTypes from 'prop-types'
import Boton from './Boton.jsx'
import Boton2 from './Boton2.jsx'
import Logo from '../../src/assets/Logo.png';
function Barra(props){

    return (
        <menu className="barra">
        <superior className="superior">
                <img src={Logo} height={"110%"} className="Logotipo"/>
                <h2> Bienvenido: {props.name}</h2>
                <Boton2 indicacion="Salir"/>
        </superior>

        <inferior className="inferior">
            <Boton indicacion="Nueva venta"/>
            <Boton indicacion="Inventario"/>
            <Boton indicacion="Apartados"/>
            <Boton indicacion="Historial de ventas"/>
        </inferior>
        </menu>
    );
};

Barra.propTypes = {
    name: PropTypes.string,
    IsLogged: PropTypes.bool
};
Barra.defaultProps = {
    name: "User",
    IsLogged: false
};

export default Barra