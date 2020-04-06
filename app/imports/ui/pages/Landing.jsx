import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='app-landing-background'>
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4} textAlign='center'>
            <Header as='h1'>Welcome!</Header>
            <Header as='h3'>During these trying and scary times, we must think of your health, but also think of ours.  To get started, you can make an account and </Header>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Welcome to this template</h1>
            <p>Now get to work and modify this app!</p>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
