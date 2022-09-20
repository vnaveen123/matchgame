import './index.css'

const MatchCard = props => {
  const {details, onClickButtonMach} = props
  const {thumbnailUrl, id} = details

  const matchImage = () => {
    onClickButtonMach(id)
  }

  return (
    <li>
      <button type="button" onClick={matchImage}>
        <li className="tumbcard">
          <img src={thumbnailUrl} alt="thumbnail" className="tumbmail" />
        </li>
      </button>
    </li>
  )
}
export default MatchCard
