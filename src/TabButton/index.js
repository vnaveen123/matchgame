import './index.css'

const TabButton = props => {
  const {details, onClickButton, isActive} = props
  const {tabId, displayText} = details
  const classStyle = isActive ? 'styledbutton' : 'unstyledbutton'

  const onFilter = () => {
    onClickButton(tabId)
  }
  return (
    <li>
      <button className={classStyle} type="button" onClick={onFilter}>
        <li className="buttonlist">{displayText}</li>
      </button>
    </li>
  )
}

export default TabButton
