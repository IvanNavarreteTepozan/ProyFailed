import '../Styles/Login.css';

function Login(){

    return(
        <div className="pagina">
            <div className="Contenido">
                <fondo className="fondo">
                </fondo>
                <form action="" method="post">

                    <p className='Campo'>
                        <label for="User">Usuario:</label>
                        <input type="text" placeholder="Escriba su usuario" required />
                    </p>
                    <p className='Campo'>
                        <label for="password">Contraseña:</label>
                        <input type="password" placeholder="Escriba su contraseña" required />
                    </p>
                    <p>
                        <button>Ingresar</button>
                    </p>
                </form>
            </div>
        </div>
        
    );
}

export default Login