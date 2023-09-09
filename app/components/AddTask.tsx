"use client"; //we need this as by default, this AddTask file is a server side file as it is Nextjs so we need to explicitly
//define that this would be client side file as on server side, we cant use useState
import { AiOutlinePlusSquare } from "react-icons/ai";
import Modal from "./Modal";
import { useState, FormEventHandler } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router=useRouter();
  const [modalOpen,setModalOpen]=useState<boolean>(false);
  const [newTaskValue,setNewTaskValue]=useState('');
  const handleSubmitNewTodo: FormEventHandler <HTMLFormElement>= async (e) =>{
  e.preventDefault();
  await addTodo({
    id:"6",
    text: newTaskValue
  });
  //console.log(newTaskValue);
  setNewTaskValue("");
  setModalOpen(false);
  router.refresh();
};
  return (
    <div>
      <button onClick={()=>setModalOpen(true)}className="btn btn-secondary w-full">Add new task
      <AiOutlinePlusSquare className='ml-3' size={20}/>
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
       <form onSubmit={handleSubmitNewTodo}>
        <h3 className="font-bold text-lg"></h3>
        <div className='modal-action'>
          <input value={newTaskValue} onChange={e=>setNewTaskValue(e.target.value)} type='text' placeholder="Type here" className="input input-boarded w-full w-full"/>
          <button type='submit' className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >Submit</button>
        </div>
       </form>
        </Modal>
    </div>
  )
}

export default AddTask
