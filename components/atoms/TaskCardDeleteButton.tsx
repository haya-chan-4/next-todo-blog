import React,{VFC} from 'react'


type Props = {
  taskCardsList: any,
  setTaskCardsList: any,
  taskCard: any,
}



export const TaskCardDeleteButton: VFC<Props> = (props) => {
  const {taskCard, setTaskCardsList, taskCardsList} = props;

  const TaskCardDelete = (id: number) => {
    // タスクカードを削除する
    {
      setTaskCardsList(taskCardsList.filter((e: { id: number; }) => e.id !== id));
    }
  }

  return (
    <div className='mr-2'>
      <button onClick={() => TaskCardDelete(taskCard.id)}>x</button>
    </div>
  )
}
