import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const form = useSelector(state => state.form);
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <li>
                    <Link to="/dictionary">Dictionary</Link>
                </li>
            </ul>
            <span style={{color: '#fff'}}>Bienvenido: {form.formData.username}</span>
        </nav>
    );
};

export default Navbar;