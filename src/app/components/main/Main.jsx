import * as React from 'react';
import './main.css';
import Footer from '../footer/Footer.jsx';
import ArticleHeader from './ArticleHeader.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.forceUpdate();
  }

  render() {
    return(
      <div className='mb-flex-col mb-main'>
        <div className='mb-flex-col mb-main-cont'>
          <div className='mb-flex-col mb-main-title'>
            <div>
              <div className='mb-main-title-welcome'>WELCOME!</div>
              <div className='mb-main-title-info'>to moonl1ght blog</div>
            </div>
          </div>
          <div className='mb-main-header'>Articles on Russian (Habr)</div>
          <div className='mb-main-row'>
            <ArticleHeader text='article 1' w='54%'/>
            <ArticleHeader text='article 2' w='44%'/>
          </div>
          <div className='mb-main-row'>
            <ArticleHeader text='article 3' w='41%'/>
            <ArticleHeader text='article 4' w='57%'/>
          </div>
        </div>
        <Footer text='This blog is maintained by moonl1ght.'/>
      </div>
    );
  }

}

export default Main;