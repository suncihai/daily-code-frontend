import styled from 'styled-components'

const Bar = styled.div`
   background: #6abb03;
   height: 65px;
   line-height: 65px;
   color: #fff;
   text-align: center;
`

const Footer = () => (
  <div>
    <Bar>
      Copyright 2017-2019 © code , All Rights Reserved
    </Bar>
  </div>
)

export default Footer;
