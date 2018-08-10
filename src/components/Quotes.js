import React from 'react'

const quotes = [
  `Color spots against a light gray or muted field highlight and
  italicize data, and help to weave an overall human.`,
  `Ideas not only guide work, but also help defend our designs against
  arbitrary taste preferences.`,
  `To paint well is simply this: to put the right color in the right
  place.`,
  `Above all, do no harm.`,
  `Comparisons must be enforced within the scope of the eyespan.`,
  `Small multiples reveal, all at once, a scope of alternatives, a range of options.`,
  `There is nothing as mysterious as a fact clearly described.`,
  `At the heart of quantitative reasoning is a single question: Compared to what ?`,
  `Constancy of design puts the emphasis on changes in data, not changes in data frames.`,
  `It is the nonexistent in things which makes them serviceable.`,
  `A vessel is useful only through its emptiness.`,
  `Information consists of differences that make a difference.`,
  `Clarity is not everything, but there is little without it.`,
  `Confusion and clutter are failures of design, not attributes of information.`,
  `The deepest reason for displays that portray complexity and intricacy is that the worlds we seek to understand
  are complex and intricate.`,
  `It is not how much empty space there is, but rather how it is used. It is not how much information there is,
  but rather how effectively it is arranged.`,
  `Simplicity of reading derives from the context of detailed and complex information, properly arranged. A most
  unconventional design strategy is revealed: to clarify, add detail.`,
]

export default () => (
  <React.Fragment>
    <h1
      style={{
        fontSize: '1.8em',
        borderLeft: '8px solid black',
        paddingLeft: '10px',
      }}
    >
      Quotes
    </h1>
    <p>
      Some of the highlights that I've collected so far from my readings which
      includes notes, quotes and phrasal verbs.
    </p>
    <ul id="highlights-quotes">
      {quotes.map(quote => (
        <li>
          <blockquote>{quote}</blockquote>
        </li>
      ))}
    </ul>
  </React.Fragment>
)
