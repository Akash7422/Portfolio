
import React, {useRef, useState} from 'react';
import "./contact.css";
import {MdEmail} from "react-icons/md";
import {RiMessage3Fill} from "react-icons/ri";
import {AiOutlineWhatsApp} from "react-icons/ai"
import emailjs from "emailjs-com";


const Contacts = () => {
    const YOUR_SERVICE_ID= process.env.REACT_APP_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID=process.env.REACT_APP_YOUR_TEMPLATE_ID;
    console.log(YOUR_TEMPLATE_ID);
    const YOUR_USER_ID=process.env.YOUR_USER_ID;
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm({YOUR_SERVICE_ID}, {YOUR_TEMPLATE_ID}, form.current, {YOUR_USER_ID})
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

      const [inputText, setInputText] = useState("");
     

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const [disable, setDisable] = React.useState(false);
  function DisableAfterClick() {
    alert("mail sent...");
  }
    return (
        <section id="contact">
            <h5>Get i touch</h5>
            <h2>
                Contact Me
            </h2>
            <div className='container cntct__cntnr'>
            <div className='cntc__options'>
            <article className='cntc__option'>
            <MdEmail className='cntc__option-icons'/>
            <h4>Email</h4>
            <h5>
                akashmk1998@gmail.com
            </h5>
            <a href='mailto:akashmk1998@gmail.com'target="__blank"s>send a msg</a>


            </article>
            <article className='cntc__option'>
            <RiMessage3Fill />
            <h4>Messanger</h4>
            <h5>
                Akash K
            </h5>
            <a href='http://m.me/akashk.com' target="__blank">send a msg</a>


            </article>
            <article className='cntc__option'>
            <AiOutlineWhatsApp />
            <h4>WhastApp</h4>
            <h5>
                Akash K
            </h5>
            <a href='https://api.whatsapp.com/send?phone=+919108964269' target="__blank">send a msg</a>
            </article>
            </div>
            <form ref={form} onSubmit={sendEmail} >
            <input  type="text" name="name" placeholder='Your full Name' required />
            <input type="email" name="email" placeholder='Your Mail Name' required />
            <textarea name="message" rows="7" placeholder='your message' required />
            <button type='submit' className='btn btn-primary'>Contact me</button>

            </form>

            </div>
        </section>
    )
}

export default Contacts;
