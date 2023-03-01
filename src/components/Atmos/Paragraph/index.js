import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: ${props => props.palette};
  font-size: 1rem;
  line-height: 1.3rem;
`

const Paragraph = ({ ...props }) => {
  return <StyledParagraph {...props} />
}

export default Paragraph;