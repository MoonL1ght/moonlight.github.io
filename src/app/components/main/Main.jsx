import * as React from 'react';
import './main.css';
import Footer from '../footer/Footer.jsx';

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
        <div className='mb-main-title'>
          <div className='mb-main-title-line'></div>
          <div className='mb-main-title-welcome'>WELCOME!</div>
          <div className='mb-main-title-info'>to moonl1ght blog</div>
          <div className='mb-main-title-line'></div>
        </div>
        <Footer text='This blog is maintained by moonl1ght.'/>
      </div>
    );
  }

}

export default Main;