import styled from 'styled-components';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 120px 0;

  ${Button.Element} {
    height: 56px;
    padding: 0 48px;
    line-height: 56px;
  }

  ${ButtonGroup.Element} {
    ${Button.Element} {
      margin-right: 24px;

      &:last-child {
        margin: 0;
      }
    }
  }
`;

const StyledHeroSecondaryTitle = styled(Heading).attrs({
  variant: 'secondary',
})`
  margin-bottom: 40px;
  color: #938E8C;
  font-weight: 400;
`;

const StyledHeroTitle = styled(Heading).attrs({
  variant: 'primary',
})`
  margin-bottom: 16px;
`;

export {
  StyledHero,
  StyledHeroSecondaryTitle,
  StyledHeroTitle,
};
