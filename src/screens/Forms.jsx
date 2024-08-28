import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { clearSesion, setFormData } from '../redux/form/formActions';
import { motion } from 'framer-motion';
import ModalInfo from '../components/ModalInfo';

const Forms = () => {

   const form = useSelector(state => state.form);

   const dispatch = useDispatch();

   const [showModal, setShowModal] = useState(false);

   const [message, setMessage] = useState('');

   const [passwordTxt, setPasswordTxt] = useState('password');

   const [isLogout, setIsLogout] = useState(false);

   const [values, handleChange] = useForm({
      username: '',
      email: '',
      password: ''
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      if (values.password === form.defaultPassword) {
         dispatch(
            setFormData(values)
         )
         setMessage("Bienvenido al modulo 7 React");
      } else {
         setMessage("Password incorrento.");
      }
      setShowModal(true);

   }

   const hideModal = () => {
      setShowModal(false);
   }

   const showModalLogout = () => {
      setIsLogout(true);
      setMessage("Esta seguro de cerrar sesión?");
      setShowModal(true);
   }

   const logout = () => {
      dispatch(clearSesion())
      setShowModal(false);
      setIsLogout(false);
   }

   const changeTypeInput = () => {
      if (passwordTxt === 'text') {
         setPasswordTxt('password');
      } else {
         setPasswordTxt('text');
      }
   }

   return (
      <>
         <ModalInfo visible={showModal}
            message={message}
            onClose={hideModal}
            isLogout={isLogout}
            logout={logout}/>

         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
         >
            <h1>Form hook</h1>
            <form onSubmit={handleSubmit}>
               {
                  form.formData.username && <h4>username: {form.formData.username}</h4>
               }
               <div>
                  <label htmlFor="username">Userame</label>
                  <input type="text" id='username'
                     name='username'
                     value={values.username}
                     onChange={handleChange} required />
               </div>
               <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email'
                     name='email'
                     value={values.email}
                     onChange={handleChange} required />
               </div>
               <div>
                  <label htmlFor="password">Password</label>
                  <input id='password'
                     type={passwordTxt === 'text' ? 'text' : 'password'}
                     name='password'
                     value={values.password}
                     onChange={handleChange} required />
                  <button type='button' onClick={changeTypeInput}>
                     {
                        passwordTxt === 'text' ? 'hide' : 'show'
                     }
                  </button>
               </div>
               <button type='submit'>Submit</button>
               {
                  form.formData.username &&
                  <button type='button' onClick={showModalLogout} style={{ background: 'none', border: 'none', color: 'navy', textDecoration: 'underline', cursor: 'pointer' }}>Logout</button>
               }
            </form>
         </motion.div>
      </>
   )
}

export default Forms
