import * as React from 'react';
import './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

 
  resize() {
    
  }

  
  render() {
    return(
      <footer className='mb-flex-col mb-footer'>
        <div className='mb-footer-line'></div>
        <div className='mb-footer-text'>{this.state.text}</div>
      </footer>
    );
  }
}

export default Footer;