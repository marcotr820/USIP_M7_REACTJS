import { motion } from "framer-motion"

const ModalInfo = ({ visible, message, onClose, isLogout, logout }) => {

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
            <div>
               <span>{message}</span>
               {
                  isLogout && <button type="button" onClick={logout}>Presionar para salir.</button>
               }
            </div>
            <button type="button" className="close-btn-success" onClick={onClose}>X</button>
         </motion.div>
      </div>
   )
}

export default ModalInfo
