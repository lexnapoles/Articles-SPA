import React, { Component } from 'react';
import { singleArticlePropType } from '../propTypes';

class Article extends Component {
  static renderArticle({ author, content, title }) {
    return (
      <article >
        <h1 >{title}</h1 >
        <h2 >{author}</h2 >
        <p >{content}</p >
      </article >
    );
  }

  render() {
    const { article } = this.props;

    return article
      ? Article.renderArticle(article)
      : <div >No Article Found</div >;
  }
}

Article.propTypes = {
  article: singleArticlePropType,
};
export default Article;
