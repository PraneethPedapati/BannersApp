import './index.css'

const BannerCard = props => {
  const {cardList} = props
  const {headerText, description, className} = cardList
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCard
