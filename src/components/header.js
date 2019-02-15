import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, loading }) => {
  return (
    <HeaderBar>
      <InnerHeaderBar>Personal Terminal</InnerHeaderBar>
    </HeaderBar>
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
  color: ${props => props.theme.terminal_header.fontColor};
  text-transform: uppercase;
  border: 3px solid ${props => props.theme.terminal_header.border};
  font-family: 'Sevastopol';
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  background: ${props => props.theme.terminal_header.innerBackground};
  line-height: 1;
  @media (max-width: ${props => props.theme.query.tablet}) {
    font-size: 26px;
  }
`
const InnerHeaderBar = styled.div`
  background: ${props => props.theme.terminal_header.background};
  padding: 2px 8px;
  width: calc(100% - 50px);
  @media (max-width: ${props => props.theme.query.tablet}) {
    padding: 0 8px;
  }
`
