import React from 'react'
import { useRouter } from 'next/router'

const SwitchPost = props => {
  const { index, posts } = props
  const router = useRouter()
  
  let previous = false;
  let next = false;
  if(index === 0) {
    previous = true
  } else if(posts.length === index + 1){
    next = true;
  }

  const handleClick = e => {
      e.stopPropagation();
      const id = e.target.id;

      switch(id) {
        case "previous":
          router.push({
              pathname: '/blog/[pid].js',
              query: {
                pid: `${posts[index - 1]}`
              }
            },
             `/blog/${posts[index - 1]}`)
          break;
        case "next":
          router.push({
              pathname: '/blog/[pid].js',
              query: {
                pid: `${posts[index + 1]}`
              }
            },
             `/blog/${posts[index + 1]}`)
          break;
        default:
            router.push({
              pathname: '/blog'
            })

      }
  }

  return (
    <>
      <div className="buttons">
        <span id="previous" className={`button ${previous && 'hidden'}`} onClick={handleClick}> &larr; Previous</span>
        <span className={`divider ${previous && 'hidden'}`}></span>
        <span id="index" className="button" onClick={handleClick}> Blog Index </span>
        <span className={`divider ${next && 'hidden'}`}></span>
        <span id="next" className={`button ${next && 'hidden'}`} onClick={handleClick}> Next &rarr; </span>
      </div>
      <style jsx>
      {`
        .buttons{
          font-size: 18px;
          width: 100%;
          margin: 2em auto -5px auto;
          text-align: center;
          padding: 16px;
          color: #888888;
          cursor:pointer;
        }
        .buttons .divider::after {
          content: "|";
          margin: 0 0.5em;
          font-size: 16px;
        }
        .button:hover {
          color: #2a7ae2;
        }
        .hidden {
          display: none
        }

        `}
      </style>
    </>
  )
}

export default SwitchPost
