import styled from 'styled-components'
import { themeColor } from '../../common/css/constant'

const Bar = styled.div`
   background: ${themeColor};
   height: 65px;
   line-height: 65px;
   color: #fff;
   text-align: center;
`

const Footer = () => (
  <div>
    <Bar>
      Copyright 2019 © code , All Rights Reserved
    </Bar>
  </div>
)

export default Footer;
