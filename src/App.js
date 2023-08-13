import {Component} from 'react'
import Header from './components/Header'
import SlidesBody from './components/SlidesBody'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <SlidesBody />
      </div>
    )
  }
}

export default App
