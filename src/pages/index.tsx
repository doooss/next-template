import type { NextPage } from 'next';

import { GridContainer, GridItem } from '../components/elements/Grid';

const Home: NextPage = () => {
  return (
    <GridContainer width="100%">
      <GridItem mobile={6} tablet={4} row={3}>
        Next Template post css ver
      </GridItem>
      <GridItem mobile={6} tablet={4} row={3}>
        Next Template post css ver
      </GridItem>
      <GridItem mobile={6} tablet={4} row={3}>
        Next Template post css ver
      </GridItem>
      <GridItem mobile={6} tablet={4} row={3}>
        Next Template post css ver
      </GridItem>
    </GridContainer>
  );
};

export default Home;
