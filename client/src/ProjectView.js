import React from 'react';
import { Grid, Header, Item } from 'semantic-ui-react';
import Citation from './Citation';

const ProjectView = props => (
  <Grid divided container stackable verticalAlign='middle'>
    <Grid.Row>
      <Header dividing>
        <Header.Content content={props.title} />
        <Header.Subheader content='Project Resources' />
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Item.Group divided>
      {props.sources.map((src, i) => (
        <Citation key={i} title={`Citation ${i+1}`}source={src} />
      ))}
      </Item.Group>
    </Grid.Row>
  </Grid>
);

export default ProjectView;
