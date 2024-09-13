import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { deletePalabraAction } from '../redux/dictionary/dictionaryActions';

const ModalEliminarPalabra = ({visible, onClose}) => {

   const [deletePalabra, setDeletePalabra] = useState('');
   const dispatch = useDispatch();
   const palabras = useSelector(state => state.dictionary.palabras);

   const eliminarPalabra = (e) => {
      e.preventDefault();
      const palabra = palabras.find((p) =>
         p.espanol === deletePalabra ||
         p.ingles === deletePalabra ||
         p.portugues === deletePalabra
      )
      if (palabra) {
         dispatch(
            deletePalabraAction(deletePalabra)
         )
         alert('La palabra fue eliminada con exito.')
      }
      else {
         alert('Palabra no encontrada');
      }
   }

   if (!visible) {
      return null;
   }

   return (
      <div className="modal-overlay">
         <motion.div
            className="notification-success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
         >
            <h2>Eliminar Palabra</h2>
            <h4>Que palabra decea eliminar del diccionario puedes escribir su palabra en ESPANOL, INGLES O PORTUGUES</h4>
            <form onSubmit={eliminarPalabra}>
               <div>
                  <label htmlFor="palabra">Palabra</label>
                  <input type="text" id='palabra'
                     name='palabra'
                     value={deletePalabra}
                     onChange={(e) => setDeletePalabra(e.target.value)} required />
               </div>
               
               <button type='submit'>Eliminar</button>
            </form>
            <button type="button" className="close-btn-success" onClick={onClose}>X</button>
         </motion.div>
      </div>
   )
}

export default ModalEliminarPalabra
