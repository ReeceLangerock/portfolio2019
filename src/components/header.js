import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, loading }) => {
  return <HeaderBar>{siteTitle}</HeaderBar>
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
  background: ${props => props.theme.terminal_header.background};
  padding: 4px 8px;
  color: ${props => props.theme.terminal_header.fontColor};
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.terminal_header.border};
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
`
