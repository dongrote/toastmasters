import React, {Component} from 'react';
import ProjectView from './ProjectView';
import AuthorWidget from './AuthorWidget';
import { Container, Segment } from 'semantic-ui-react';

class App extends Component {
  state = {sources: []};

  componentDidMount() {
    fetch('/api/sources')
      .then(res => res.json())
      .then(sources => this.setState({sources}))
      .catch(console.error);
    fetch('/api/author')
      .then(res => res.json())
      .then(author => this.setState({author}))
      .catch(console.error);
  }

  render() {
    return (
      <Container fluid>
        <Segment vertical>
          <AuthorWidget author={this.state.author} />
        </Segment>
        <Segment vertical>
          <ProjectView title='Researching and Presenting' sources={this.state.sources} />
        </Segment>
      </Container>
    );
  }
}

export default App;
