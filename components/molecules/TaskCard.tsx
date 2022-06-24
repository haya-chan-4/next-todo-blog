import React, { useState, VFC } from 'react'
import { TaskAddInput } from '../atoms/TaskAddInput';
import { TaskCardDeleteButton } from '../atoms/TaskCardDeleteButton';
import { Tasks } from './Tasks';
import { TaskTitle } from '../atoms/TaskTitle';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  inputText: string,
  setInputText: (value: string) => void
  taskList: any,
  setTaskList: any,
  taskCardsList: any,
  setTaskCardsList: any,
  taskCard: any,
  index: number,
}

export const TaskCard: VFC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard, index } = props;

  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className="w-64 ml-4 mb-4 px-2.5 py-6 bg-slate-50 text-red-400 rounded"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            {...provided.dragHandleProps}
            className='flex justify-between items-center'>
            <TaskTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  )
}
