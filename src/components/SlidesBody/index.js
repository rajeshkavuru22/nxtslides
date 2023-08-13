import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SlideItem from '../SlideItem'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class SlidesBody extends Component {
  state = {
    activeSlide: initialSlidesList[0],
    slidesList: initialSlidesList,
    headingItem: false,
    descriptionItem: false,
  }

  onClickSlide = slide => {
    this.setState({
      activeSlide: slide,
      headingItem: false,
      descriptionItem: false,
    })
  }

  onAddNewSlide = () => {
    const {slidesList, activeSlide} = this.state
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const activeSlideIndex = slidesList.indexOf(activeSlide)
    slidesList.splice(activeSlideIndex + 1, 0, newSlide)
    console.log(slidesList, activeSlideIndex)

    this.setState({
      slidesList,
      activeSlide: newSlide,
    })
  }

  changeActiveHeading = event => {
    const {activeSlide, slidesList} = this.state
    const List = [...slidesList]
    const slideNumber = slidesList.indexOf(activeSlide)
    const updatedSlide = {...activeSlide, heading: event.target.value}
    List[slideNumber] = updatedSlide
    this.setState({activeSlide: updatedSlide, slidesList: List})
  }

  changeActiveDescription = event => {
    const {activeSlide, slidesList} = this.state
    const List = [...slidesList]
    const slideNumber = slidesList.indexOf(activeSlide)
    const updatedSlide = {...activeSlide, description: event.target.value}
    List[slideNumber] = updatedSlide
    this.setState({activeSlide: updatedSlide, slidesList: List})
  }

  onBlurActiveHeading = event => {
    const {activeSlide, slidesList} = this.state
    const List = [...slidesList]
    const slideNumber = slidesList.indexOf(activeSlide)
    console.log(event.target.value)
    if (event.target.value === '') {
      const updatedSlide = {...activeSlide, heading: 'Heading'}
      List[slideNumber] = updatedSlide
      this.setState({
        activeSlide: updatedSlide,
        slidesList: List,
        headingItem: false,
      })
    } else {
      this.setState({headingItem: false})
    }
  }

  onBlurActiveDescription = event => {
    const {activeSlide, slidesList} = this.state
    const List = [...slidesList]
    const slideNumber = slidesList.indexOf(activeSlide)
    console.log(event.target.value)
    if (event.target.value === '') {
      const updatedSlide = {...activeSlide, description: 'Description'}
      List[slideNumber] = updatedSlide
      this.setState({
        activeSlide: updatedSlide,
        slidesList: List,
        descriptionItem: false,
      })
    } else {
      this.setState({descriptionItem: false})
    }
  }

  onClickActiveHeading = () => {
    this.setState({headingItem: true})
  }

  onClickActiveDescription = () => {
    this.setState({descriptionItem: true})
  }

  activeSlide = () => {
    const {activeSlide, headingItem, descriptionItem} = this.state
    return (
      <div className="active-slide-container" testid="slide">
        {headingItem ? (
          <input
            type="text"
            className="Heading Button"
            value={activeSlide.heading}
            onChange={this.changeActiveHeading}
            onBlur={this.onBlurActiveHeading}
          />
        ) : (
          <h1
            className="Heading btn"
            type="button"
            onClick={this.onClickActiveHeading}
          >
            {activeSlide.heading}
          </h1>
        )}
        {descriptionItem ? (
          <input
            type="text"
            className="Description Button"
            value={activeSlide.description}
            onChange={this.changeActiveDescription}
            onBlur={this.onBlurActiveDescription}
          />
        ) : (
          <p
            className="Description btn"
            type="button"
            onClick={this.onClickActiveDescription}
          >
            {activeSlide.description}
          </p>
        )}
      </div>
    )
  }

  slidesPanel = () => {
    const {slidesList, activeSlide} = this.state
    return (
      <ol className="slides-container">
        {slidesList.map(eachSlide => (
          <SlideItem
            key={eachSlide.id}
            slide={eachSlide}
            onClickSlide={this.onClickSlide}
            activeSlide={activeSlide}
            slidesList={slidesList}
          />
        ))}
      </ol>
    )
  }

  newButton = () => (
    <button className="button" type="button" onClick={this.onAddNewSlide}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
        className="plus-icon"
        alt="new plus icon"
      />
      New
    </button>
  )

  slidesBody = () => {
    const {activeSlide, headingItem, descriptionItem} = this.state
    console.log(activeSlide, headingItem, descriptionItem)
    return (
      <div className="slides-body-container">
        {this.slidesPanel()}
        {this.activeSlide()}
      </div>
    )
  }

  render() {
    console.log('render')
    return (
      <div className="body-container">
        {this.newButton()}
        {this.slidesBody()}
      </div>
    )
  }
}

export default SlidesBody
