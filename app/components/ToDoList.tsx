

const ToDoList = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default ToDoList
