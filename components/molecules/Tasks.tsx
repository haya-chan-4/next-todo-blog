import React, { useState, VFC } from 'react'
import { Task } from '../atoms/Task';
import { DragDropContext, Droppable } from "react-beautiful-dnd";


type Props = {
  inputText: string,
  taskList: any,
  setTaskList: any
}

const reorder = (taskList: any[], startIndex: any, endIndex: any) => {
  // タスクの並び替え
  const remove = taskList.splice(startIndex, 1)
  taskList.splice(endIndex, 0, remove[0])
}

export const Tasks: VFC<Props> = (props: { taskList: any; setTaskList: any; }) => {
  const { taskList, setTaskList } = props;

  const handleDragEnd = (result: any) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList, result.source.index, result.dest)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) =>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task: { id: number; text: string; draggableId: string; }, index: number) => (
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
