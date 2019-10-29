import React from 'react';
import LinkButton from './LinkButton';

export const Contact = ({}) => (
  <section>
    <h4 className="contacto">Contacta conmigo</h4>
    <LinkButton url="https://www.instagram.com/oskitaa98/?hl=es">
      
      
        Instagram
      
    </LinkButton>
    <LinkButton url="https://www.instagram.com/oskitaa98/?hl=es">
  
        Instagram
     
    </LinkButton>
    <LinkButton url="https://twitter.com/xSauN">
      
        Twitter
     
    </LinkButton>
    <LinkButton url="https://www.linkedin.com/in/oscar-carballar-113882162/">
      
        Linkedin
     
    </LinkButton>
    <LinkButton url="mailto:oscarcarboc@gmail.com">
    
        Correo
      
    </LinkButton>
    <LinkButton url="https://github.com/Oskitaa">
     
        GitHub
     
    </LinkButton>
<style jsx>{`

section {
    margin-top: 100px;
    position: absolute;
    display: block;
    
    
}

a{
    color:black;
}
`}</style>

  </section>
);

export default Contact;
