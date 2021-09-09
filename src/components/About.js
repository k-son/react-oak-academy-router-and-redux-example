import React from "react";
import Modal from './Modal';

const About = (props) => {
  
  setTimeout(() => {
    props.history.push('/contact')
  }, 2000);

  return (
    <div>
      <Modal />
      <h3>About</h3>
      <p>lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default About;