import React, { VFC } from 'react'
import { v4 as uuid } from 'uuid';


type Props = {
  taskCardsList: {
    id: string;
    draggableId: string;
  }[],
  setTaskCardsList: ([]) => void,
}

export const AddTaskCardButton: VFC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList } = props;

  const addTaskCard = () => {
    const taskCardId = uuid();
    /* タスクカードを追加する。 */
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <div
      onClick={addTaskCard}
      className="ml-5 bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center pointer flex-wrap shadow-outline">
      <button

        className='text-3xl'>+</button>
    </div>
  )
}
