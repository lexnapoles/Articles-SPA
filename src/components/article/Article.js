import React, { Component } from 'react';
import MdEditIcon from 'react-icons/lib/md/mode-edit';
import { articlePropType } from '../propTypes';
import './b-article.css';
import '../articlesList/articleOverview/b-toolbar.css';

class Article extends Component {
  static renderArticle({ article, onUpdate }) {
    const { author, content, title, tags } = article;

    return (
      <article className="b-article" >
        <header className="b-article__header">
          <h1 >{title}</h1 >
          <MdEditIcon className="b-toolbar__item" size={23} onClick={onUpdate} />
        </header >
        <h2 >{author}</h2 >
        <p className="b-article__content" >{content}</p >
        {tags.map(tag => <span key={tag} className="b-article__tag" >{tag}</span >)}
      </article >
    );
  }

  render() {
    const { article } = this.props;

    return article
      ? Article.renderArticle(this.props)
      : <div >No Article Found</div >;
  }
}

Article.propTypes = articlePropType;

export default Article;
