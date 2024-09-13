import React, { useState } from 'react'
import ModalAgregarPalabra from '../../components/ModalAgregarPalabra';
import ModalTraducirPalabra from '../../components/ModalTraducirPalabra';
import ModalEliminarPalabra from '../../components/ModalEliminarPalabra';

const Dictionary = () => {

   const [showModalAgregar, setShowModalAgregar] = useState(false);
   const [showModalTraducir, setShowModalTraducir] = useState(false);
   const [showModalEliminar, setShowModalEliminar] = useState(false);

   const modalAgregar = () => {
      setShowModalAgregar(true);
   }

   const hideModalAgregar = () => {
      setShowModalAgregar(false);
   }

   const mostrarModalTraducir = () => {
      setShowModalTraducir(true);
   }

   const ocultarModalTraducir = () => {
      setShowModalTraducir(false);
   }

   const mostrarModalEliminar = () => {
      setShowModalEliminar(true);
   }

   const ocultarModalEliminar = () => {
      setShowModalEliminar(false);
   }

   return (
      <>
         <ModalAgregarPalabra visible={showModalAgregar} onClose={hideModalAgregar}/>

         <ModalTraducirPalabra visible={showModalTraducir} onClose={ocultarModalTraducir} />

         <ModalEliminarPalabra visible={showModalEliminar} onClose={ocultarModalEliminar} />

         <div style={{ textAlign: 'center' }}>
            <h1>DICTIONARY USIP</h1>
            <h4>Modulo recuperatorio</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
               <button onClick={modalAgregar}>Agregar palabra</button>
               <button onClick={mostrarModalEliminar}>Eliminar palabra</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
               <button onClick={mostrarModalTraducir}>Traducir</button>
            </div>
         </div>
      </>
   )
}

export default Dictionary
