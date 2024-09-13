import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';

const ModalTraducirPalabra = ({ visible, onClose }) => {

   const [searchWord, setSearchWord] = useState('');

   const [selectedLanguage, setSelectedLanguage] = useState('espanol');

   const [resultado, setResultado] = useState('');

   const palabras = useSelector(state => state.dictionary.palabras);

   useEffect(() => {
      setSearchWord('');
      setSelectedLanguage('espanol');
      setResultado('');
   }, [visible])

   const buscarPalabra = (event) => {
      event.preventDefault();
      const palabra = palabras.find((p) =>
         p.espanol === searchWord ||
         p.ingles === searchWord ||
         p.portugues === searchWord
      )

      if (palabra) {
         setResultado(palabra[selectedLanguage])
      }
      else {
         alert('Palabra no encontrada');
      }
   }

   const resultadoChange = (event) => {
      setResultado(event.target.value);
   };

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
            <h2>Buscar Palabra</h2>
            <h4>Que palabra decea traducir en el diccionario agregue su palabra y despues el idioma de traduccion</h4>
            <form onSubmit={buscarPalabra}>
               <div>
                  <label htmlFor="palabra">Palabra a traducir</label>
                  <input
                     type="text"
                     value={searchWord}
                     onChange={(e) => setSearchWord(e.target.value)}
                  />
               </div>
               <div>
                  <label>Seleccionar idioma:</label>
                  <select
                     value={selectedLanguage}
                     onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                     <option value="espanol">Español</option>
                     <option value="ingles">Ingles</option>
                     <option value="portugues">Portugués</option>
                  </select>
               </div>
               <textarea style={{ width: '300px', height: '70px' }} onChange={resultadoChange} value={resultado} name="resultado" id="resultado"></textarea>
               <br /><br />
               <button type='submit'>Traducir</button>
            </form>
            <button type="button" className="close-btn-success" onClick={onClose}>X</button>
         </motion.div>
      </div>
   )
}

export default ModalTraducirPalabra
