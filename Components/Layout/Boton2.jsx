import PropTypes from 'prop-types'
function Boton(props){

    return (
        <boton>
            <button className='boton2'>
                {props.indicacion}
            </button>
        </boton>
    );
}


export default Boton