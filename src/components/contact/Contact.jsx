import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context"

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_bnwiak3', 'template_36ftmnb', formRef.current, 'user_CPzc7yyOLfWFIpkAj6wdX')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              010-9985-8545
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              jinhyeonju1023@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              서울특별시 광진구 화양동 10-14
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>ddd</b>ddd
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="성함" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="제목" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="이메일" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="5" placeholder="내용" name="message"/>
            <button>전송</button>
            {done && "감사합니다!"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
