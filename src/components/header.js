import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, loading }) => {
  if(loading){
    return null
  }
return (

<HeaderBar>{siteTitle}</HeaderBar>
)

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderBar = styled.div`
  width: 100%;
  background: #00ff57;
  padding: 4px 8px;
  color: black;
  text-transform: uppercase;
  border: 1px solid #00cd30;
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
`
