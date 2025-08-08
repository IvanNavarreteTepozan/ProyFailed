import PropTypes from 'prop-types'
function Boton(props){
    let IsClicked=false
    return (
        <boton>
            <button className='boton' onClick={IsClicked=true}>
                {props.indicacion}
            </button>
        </boton>
    );
}


export default Boton