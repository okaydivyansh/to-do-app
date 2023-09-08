
import React from 'react';

interface ModalProps {
    modalOpen: boolean;
    setModalOpen:(open: boolean)=>boolean |void; //adding | void so that is no error even if we dont pass argument
    children: React.ReactNode
}

const Modal: React.FC <ModalProps>= ({modalOpen,setModalOpen}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open":""}`}>
        <div className="modal-box">
    <form method="dialog">

      
      <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
    </div>
  )
}

export default Modal
