import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h1>Anotações</h1>
            <div className='links'>
                <Link to='/'>Inicio</Link>
                <Link to='/create'>Nova anotação</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;