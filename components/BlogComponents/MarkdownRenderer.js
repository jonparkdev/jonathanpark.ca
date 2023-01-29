import React from "react"
import ReactMarkdown from "react-markdown";
import TeX from "@matejmazur/react-katex";
const RemarkMathPlugin = require("remark-math")

const MarkdownRenderer = props => {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      math: props =>
        <TeX math={props.value} block />,
      inlineMath: props =>
        <TeX math={props.value} />,
    }
  };
  return (<ReactMarkdown {...newProps}/>)
}

export default MarkdownRenderer
