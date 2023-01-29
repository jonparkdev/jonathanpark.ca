import React from 'react'
import Header from './Header'

const Layout = props => {
  const { children } = props

  return (
    <>
      <div className="page">
        <Header />
        <div className="body">
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .page {
            min-height: 100%;
            padding: 0;
            width 100%
          }
          .body {
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            margin-top: 96px;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default Layout
