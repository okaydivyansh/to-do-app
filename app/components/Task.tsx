import { ITask } from "@/types/tasks"
import {FiEdit} from "react-icons/fi"
import {BsTrash3Fill} from "react-icons/bs"
interface TaskProps {
    task: ITask
}


const Task: React.FC<TaskProps>=({task}) => {
  return (
    (
        <tr key={task.id} >
          <td className="w-full">{task.text}</td>
          <td className="flex gap-5">
             <FiEdit className="text-yellow-500" size={25}/>
             <BsTrash3Fill className="text-red-500" size={25}/>
          </td>
        </tr>
        )
  )
}

export default Task;
