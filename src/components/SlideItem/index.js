import './index.css'

const SlideItem = props => {
  const {slide, onClickSlide, activeSlide, slidesList} = props
  const {id, heading, description} = slide

  const changeActiveSlide = () => {
    onClickSlide(slide)
  }

  const slideNumber = slidesList.indexOf(slide) + 1

  return (
    <li
      className={`${activeSlide.id === id ? 'active' : ''} list-item`}
      onClick={changeActiveSlide}
      testid={`slideTab${slideNumber}`}
    >
      <p className="number">{slideNumber}</p>
      <div className={`slide ${activeSlide.id === id ? 'Active' : ''}`}>
        <h1 className="heading">{heading}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default SlideItem
