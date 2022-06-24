import React, { memo, useCallback, useState, VFC } from 'react'


type Props = {

}

export const TaskTitle: VFC<Props> = (props) => {
  const { } = props;
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const onClick = () => {
    setIsClick(true);
    console.log(isClick)
  }

  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputCardTitle(e.target.value);
    console.log(inputCardTitle)
  }

  const onSubmit = () => {
    setIsClick(false);
  }

  const onBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={onClick} className="mb-2.5 w-1/3 cursor-pointer">
      {isClick ?
        <form onSubmit={onSubmit}>
          <input
          className='outline-none rounded-md'
            type="text"
            onChange={onChange}
            onBlur={onBlur}
            value={inputCardTitle}
            autoFocus
            maxLength={18}
          />
        </form> : <p className="text-xl">{inputCardTitle}</p>}
    </div>
  )
}
