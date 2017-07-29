import React, { Component } from 'react';
import Article from './Article';
import { articleContainerPropType } from '../propTypes';

class ArticleContainer extends Component {
  componentWillMount() {
    const { loadArticle, id } = this.props;
    const requiredFields = ['author', 'content', 'published', 'tags', 'title'];

    loadArticle(id, requiredFields);
  }

  render() {
    const { article, onUpdate } = this.props;

    return <Article article={article} onUpdate={onUpdate} />;
  }
}

ArticleContainer.propTypes = articleContainerPropType;

export default ArticleContainer;
