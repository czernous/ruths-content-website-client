import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ArticleCard from '.';
import { cardMock } from './mocks';

export default {
  title: 'Organisms/Article Card',
  component: ArticleCard,
  argTypes: cardMock,
} as unknown as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <div style={{ width: '450px', display: 'flex', maxWidth: '100%' }}>
    <ArticleCard {...args} />
  </div>
);

export const ArticleCardTemplate = Template.bind({});
ArticleCardTemplate.args = {
  title: cardMock.title,
  description: cardMock.description,
  ctaText: cardMock.ctaText,
  ctaUrl: cardMock.ctaUrl,
  image: cardMock.image,
  unoptimized: cardMock.unoptimized,
};
