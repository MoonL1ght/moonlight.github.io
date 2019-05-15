import * as React from 'react';
import './articleHeader.css';

class ArticleHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      w: props.w
    };
  }

  render() {
    let style = {
      'width': this.state.w
    }
    return(
      <div style={style} className='mb-article-header'>
        {this.state.text}
      </div>
    );
  }

}

export default ArticleHeader;