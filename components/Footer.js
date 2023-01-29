import React from 'react'

const Footer = () => {
  const today = new Date();
  const yyyy = today.getFullYear();

  return (
    <div>
      <div className='footer'>
        {yyyy}
      </div>
      <style jsx>
      {`
        .footer{
          display: flex;
          align-self: flex-end;
          justify-content: center;
        }
      `}
      </style>
    </div>
  )
}
