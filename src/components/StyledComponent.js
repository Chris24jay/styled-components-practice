import React from 'react'
import styled from 'styled-components'
import OtherButton from './OtherButton'



const Mybutton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: maroon;
  background: salmon
  padding: 0.25em 1em;
  border: white;
`;

// const SecondButton = styled(Mybutton)`
//     // color: yellow;
//     // background: black; 
// `


const StyledComponent = (props) => {

    return (
        <div>
        
        <Mybutton >Submit</Mybutton>


        {/* as="a" 

        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmic6eBaEXcAThb76PVd82TSdq1ciicKJq9CzaWXsiQ1Z1gUbfgQ" 
        
        target="_blank"  */}

        {/* <SecondButton  >Cancel</SecondButton> */}

        {/* <OtherButton button={Mybutton} /> */}
        
        </div>
    )
}

export default StyledComponent;