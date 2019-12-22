import styled from 'styled-components';

import { width } from '../../utils/styled-utils'

export const StyledContainer = styled.div`
  ${
    ({fixed, size}) => {
      if (fixed) {
        return (size ? `max-width: ${width(size)}`: `max-width: 1200px`)
      }
    }
  }
`;