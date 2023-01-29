const Bibliography = props => {

  return (
    <div className="bibliography">
      <h3> Bibliography </h3>
      {/*Will add sanitization in the future. At the moment not neede*/}
      <div className="bib-items" dangerouslySetInnerHTML={{__html: props.bibliography}} />
      <style jsx>
        {`
          .bibliography{
            margin-top: 2em;
            margin-bottom: -.5em;
          }
          .bibliography h3{
            color: #a0a0a0;
          }
          .bib-items {
            line-height: 40px;
            font-size: 18px;
          }
          .bib-items :global(.csl-entry) {
            padding-left: 1.5em;
            text-indent:-1.5em;
          }
          `}
      </style>
    </div>
  )
}

export default Bibliography
