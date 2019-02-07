import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'
import LoadingBar from '../components/LoadingBar';
const SecondPage = () => {
    
  return (
    <Layout loading>
      <Loading>
        <h1>Langerock Enterprises, Inc</h1>

        <LoadingBar/>
      </Loading>
    </Layout>
  )
}

export default SecondPage

const Loading = styled.div`
  h1 {
    font-family: 'Sevastopol';
    font-size: 94px;
    color: white;
  }
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


