type checkBoxPropsType = {
  title: string,
  state: boolean,
  handleClick: () => void,
  
}

function CheckBox({ title, state, handleClick }: checkBoxPropsType) {
  return (
    <div>
      <label>
        <input type="checkbox"
          checked={state}
          onChange={handleClick}
          className="max-w-sm"
        />
        {title}
      </label>
    </div>
  )
}

export default CheckBox