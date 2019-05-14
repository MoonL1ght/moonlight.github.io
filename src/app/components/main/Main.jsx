import * as React from 'react';
import './main.css';
import Footer from '../footer/Footer.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='mb-flex-col mb-main'>
        <div className='mb-main-title'>Main page...</div>
        <Footer text='This blog is maintained by moonl1ght.'/>
      </div>
    );
  }

}

export default Main;