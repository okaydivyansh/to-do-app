import { AiOutlinePlusSquare } from "react-icons/ai";
const AddTask = () => {
  return (
    <div>
      <button className="btn btn-secondary w-full">Add new task
      <AiOutlinePlusSquare className='ml-3' size={20}/>
      </button>
      
    </div>
  )
}

export default AddTask
