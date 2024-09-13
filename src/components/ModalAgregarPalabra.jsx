import React from 'react'
import useForm from '../hooks/useForm';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { addPalabras } from '../redux/dictionary/dictionaryActions'

const ModalAgregarPalabra = ({ visible, onClose }) => {

   if (!visible) {
      return null;
   }

   const [values, handleChange] = useForm({
      espanol: '',
      ingles: '',
      portugues: ''
   });

   const dispatch = useDispatch();

   const registrarPalabras = (event) => {
      event.preventDefault();
      dispatch(addPalabras(values));
      onClose();
      alert('Palabra agregada');
   }

   return (
      <div className="modal-overlay">
         <motion.div
            className="notification-success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
         >
            <h4>Agregar Palabra</h4>
            <form onSubmit={registrarPalabras}>
               <div>
                  <label htmlFor="espanol">Espanol</label>
                  <input type="text" id='espanol'
                     name='espanol'
                     value={values.espanol}
                     onChange={handleChange} required />
               </div>
               <div>
                  <label htmlFor="ingles">Ingles</label>
                  <input type="text" id='ingles'
                     name='ingles'
                     value={values.ingles}
                     onChange={handleChange} required />
               </div>
               <div>
                  <label htmlFor="portugues">Portugues</label>
                  <input type="text" id='portugues'
                     name='portugues'
                     value={values.portugues}
                     onChange={handleChange} required />
               </div>
               <button type='submit'>Submit</button>
            </form>
            <button type="button" className="close-btn-success" onClick={onClose}>X</button>
         </motion.div>
      </div>
   )
}

export default ModalAgregarPalabra
