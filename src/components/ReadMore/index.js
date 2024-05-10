// Write your code here
import {useState} from 'react'
import {Heading} from './styledComponents'

const ReadMore = () => {
  const [readMore, read] = useState(false)

  const cng = event => read(prevState => !readMore)
  const text =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writings and maintaining tens of thousands of components.For curious readers we have prepared a detail RFC Hooks allow you to reuse stateful logic without changing your component hierarchy.Hooks work side-by-side with existing code you can adopt them gradually.'
  const more = readMore ? text : text.slice(0, 171)
  const btnText = !readMore ? 'Read More' : 'Read Less'

  return (
    <>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />

      <p>{more}</p>
      <button type="button" onClick={cng}>
        {btnText}
      </button>
    </>
  )
}

export default ReadMore
