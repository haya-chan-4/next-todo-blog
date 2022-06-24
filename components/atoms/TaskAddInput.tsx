import React, { VFC } from 'react'
import { v4 as uuid } from 'uuid';

type Props = {
  inputText: string,
  setInputText: (value: string) => void
  taskList: any,
  setTaskList: (value: any) => void
}

export const TaskAddInput: VFC<Props> = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const taskId = uuid();
    if (inputText === '') {
      return
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`
      }
    ]);
    setInputText('')
  }

  const onChange = (e: any) => {
    setInputText(e.target.value)
    // console.log(inputText);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          className="form-control rounded-lg w-full text-md "
          placeholder='add a input' type="text" value={inputText} />

      </form>
    </div>
  )
}
