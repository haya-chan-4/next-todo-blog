import React, { VFC } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from 'react-beautiful-dnd'
type Props = {
  index: number,
  task: {
    text: string,
    id: number,
    draggableId: string,
  },
  setTaskList: any
  taskList: any,
}

export const Task: VFC<Props> = (props) => {
  const { task, taskList, setTaskList, index } = props;
  const taskDelete = (id: number) => {
    setTaskList(taskList.filter((task: { id: number; }) => task.id !== id));
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
        key={task.id}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className='flex justify-between items-center px-2 mt-3 border rounded border-gray-400'>
          <p className='m-2'>{task.text}</p>
          <button
            className='pointer'
            onClick={() => taskDelete(task.id)}>
            ×
          </button>
        </div>
      )}

    </Draggable>
  )}
