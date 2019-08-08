import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  line-height: 40px;
  color: #ffffff;
  padding: 0 6px;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;
