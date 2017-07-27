import React, { Component } from 'react';
import { singleArticlePropType } from '../propTypes';
import './b-article.css';

class Article extends Component {
  static renderArticle({ author, content, title, tags }) {
    return (
      <article className="b-article" >
        <h1 >{title}</h1 >
        <h2 >{author}</h2 >
        <p className="b-article__content" >{content}</p >
        {tags.map(tag => <span key={tag} className="b-article__tag" >{tag}</span >)}
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
