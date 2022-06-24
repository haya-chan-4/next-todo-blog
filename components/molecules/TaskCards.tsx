import React, { useState, VFC } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { AddTaskCardButton } from '../atoms/AddTaskCardButton';
import { TaskCard } from './TaskCard';


type Props = {

}

const reorder = (taskCardsList: any[], startIndex: any, endIndex: any) => {
  // タスクの並び替え
  const remove = taskCardsList.splice(startIndex, 1)
  taskCardsList.splice(endIndex, 0, remove[0])
}

export const TaskCards: VFC<Props> = (props) => {
  const {  } = props;

  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: '0',
      draggableId: "item0"
    }
  ]);

  const handleDragEnd = (result: any) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div className='flex  justify-center items-start flex-wrap'
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                inputText={''}
                index={index}
                setInputText={function (value: string): void { }}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard} taskList={undefined} setTaskList={undefined} />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
