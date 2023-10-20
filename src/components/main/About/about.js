import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="aboutSection">
      <div id="aboutTextOnly">
        <h1 className="aboutHeading">About me</h1>
        <p className="aboutParagraph1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Vivamus ac leo pretium faucibus. Nullam dapibus fermentum ipsum. Sed vel lectus. </p>
        <p className="aboutParagraph2">Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Quisque porta.</p>
      </div>
    </section>
  );
}

export default About;