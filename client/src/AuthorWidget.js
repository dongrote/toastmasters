import React from 'react';
import { Label, Image, Placeholder } from 'semantic-ui-react';
import crypto from 'crypto';

const gravatarUrl = email => `https://www.gravatar.com/avatar/${crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex')}`;

const AuthorWidget = props => props.author ? (
  <Label image size='huge'>
    <Image src={gravatarUrl(props.author.email)} avatar />
    {props.author.givenName} {props.author.familyName}
  </Label>
) : (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
    </Placeholder.Header>
  </Placeholder>
);

export default AuthorWidget;
