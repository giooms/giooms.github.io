'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

/**
 * REACT app with WP API
 * @link http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
 * @link http://codepen.io/krogsgard/pen/NRBqPp
 */
class Advent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [] // our data setup is expecting Posts
    };
  }

  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then((result) => {
      this.setState({
        posts: result.data
      });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="post-wrapper">
        {this.state.posts.map((post) => (
          <div key={post.link} className="post">
            <h2 className="post-title">
              <a href={post.link} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </h2>
            {post.featured_media ? (
              <a href={post.link}>
                <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} />
              </a>
            ) : null}
            {post.excerpt.rendered ? (
              <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            ) : null}
            <div className="entry-meta">
              <a className="author-wrap" href={post._embedded.author[0].link}>
                <img className="avatar" src={post._embedded.author[0].avatar_urls['48']} />
                by {post._embedded.author[0].name}
              </a>
              <a className="button read-more" href={post.link}>
                Read More »
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <Advent source="http://aaronsnowberger.com/wp-json/wp/v2/posts/?_embed&categories=764&per_page=3&author=1" />,
  document.querySelector("#posts")
);
