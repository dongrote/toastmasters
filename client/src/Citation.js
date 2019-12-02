import React from 'react';
import { Item } from 'semantic-ui-react';

const LabeledParagraph = ({label, content}) => (<p><strong>{label}:</strong> {content}</p>);
const LabeledLink = ({label, href}) => (<p><strong>{label}:</strong> <a href={href}>{href}</a></p>);

const Citation = ({source}) => (
  <Item>
    <Item.Content>
      <Item.Header><u>{source.title}.</u></Item.Header>
      <Item.Meta><strong>Author:</strong> {source.author}</Item.Meta>
      <Item.Description>
        {source.container && <LabeledParagraph label='Container' content={source.container} />}
        {source.otherContributors && <LabeledParagraph label='Other Contributors' content={source.otherContributors.join(', ')} />}
        {source.publisher && <LabeledParagraph label='Publisher' content={source.publisher} />}
        {source.date && <LabeledParagraph label='Date' content={source.date} />}
        {source.location && <LabeledLink label='Location' href={source.location} />}
      </Item.Description>
    </Item.Content>
  </Item>
);

export default Citation;
