import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Desculpe</h2>
            <p>Página não encontrada</p>
            <Link to='/'>Voltar ao inicio</Link>
        </div>
     );
}
 
export default NotFound;