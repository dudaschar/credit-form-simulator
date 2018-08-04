import React from 'react'
import { Link } from 'react-router-dom'
import { HamburguerMenu } from 'react-hamburger-button'
import Fade from 'react-reveal/Fade'
import Logo from './img/logo.png'
import './navbar.css'
import { HamburgerButton } from 'react-hamburger-button/dist/src/HamburgerButton';


class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: true
    }
  }

  handleClick() {
    if (window.innerWidth < 576) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
    
  }

  updateDimensions() {
    if (window.innerWidth < 576) {
      this.setState({
        isOpen: false
      })
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }


  render() {
    const isOpen = this.state.isOpen
    let NavbarLinks

    if (isOpen) {
      NavbarLinks =
        <ul>
          <li>
            <Link className="navbar__link" to="/">Como Funciona</Link>
          </li>
          <li>
            <div className="navbar__link--circle" />
          </li>
          <li>
            <Link className="navbar__link" to="/">Privacidade</Link>
          </li>
          <li>
            <div className="navbar__link--circle" />
          </li>
          <li>
            <Link className="navbar__link" to="/">Ajuda</Link>
          </li>
        </ul>
    }

    return (
      <div className="navbar">
        <div className="navbar__mobile">
          <div className="navbar__logo">
            <img src={Logo} alt="Geru" />
          </div>
          <div className="navbar__toggle">
            <HamburgerButton
              open={this.state.isOpen}
              onClick={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={0}
              color='#fffdf0'
              animationDuration={0.5}
            />
          </div>
        </div>
        <Fade top>
          {NavbarLinks}
        </Fade>
      </div>
      
    )
  }
}

export default Navbar