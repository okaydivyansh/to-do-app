"use client"; //we need this as by default, this AddTask file is a server side file as it is Nextjs so we need to explicitly
//define that this would be client side file as on server side, we cant use useState
import { AiOutlinePlusSquare } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";
const AddTask = () => {
  const [modalOpen,setModalOpen]=useState<boolean>(false);
  return (
    <div>
      <button onClick={()=>setModalOpen(true)}className="btn btn-secondary w-full">Add new task
      <AiOutlinePlusSquare className='ml-3' size={20}/>
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        modal to add todo
        </Modal>
    </div>
  )
}

export default AddTask
