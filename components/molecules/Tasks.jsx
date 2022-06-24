import React, { useState, VFC } from 'react'
import { Task } from '../atoms/Task';
import { DragDropContext, Droppable } from "react-beautiful-dnd";


// type Props = {
//   inputText: string,
//   taskList: any,
//   setTaskList: any
// }

const reorder = (taskList, startIndex, endIndex) => {
  // タスクの並び替え
  const remove = taskList.splice(startIndex, 1)
  taskList.splice(endIndex, 0, remove[0])
}

export const Tasks = (props) => {
  const { taskList, setTaskList } = props;

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList, result.source.index, result.dest)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) =>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>}

        </Droppable>
      </DragDropContext>
    </div>
  )
}
