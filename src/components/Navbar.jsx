import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {

   const form = useSelector(state => state.form);

   return (
      <nav style={{display: 'flex', justifyContent: 'space-between'}}>
         <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/products'>Products</Link>
            </li>
            <li>
               <Link to='/default'>Default</Link>
            </li>
            <li>
               <Link to='/forms'>Forms</Link>
            </li>
         </ul>
         {
            form.formData.username &&
               <span style={{color: '#fff'}}>Bienvenido: {form.formData.username}</span>
         } 
      </nav>
   )
}

export default Navbar
