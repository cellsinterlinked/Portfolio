import React, {useState} from 'react'
import './Contact.css';
import emailjs from 'emailjs-com'


const Contact = () => {

const [data, setData] = useState({
  name: "",
  email: "",
  message: ""
})


const setName = (event) => {
  setData({...data, name: event.target.value })
  console.log(data.name)
}

const setEmail = (event) => {
  setData({...data, email: event.target.value })
  console.log(data.email)
}

const setMessage = (event) => {
  setData({...data, message: event.target.value})
  console.log(data.message)
}

const sendMessage = (e) => {
  e.preventDefault();
  if(data.message && data.email && data.name) {
    emailjs.sendForm(
      'service_gd3bfrb', 
      'template_6dfv4nn', 
      e.target, 
      "user_hbc7uXk6VzJ9iJYYOUNTt"
      ).then(res=>{
        console.log(res);
      }).catch(err=> console.log(err));

  }
  setData({name: "", email: "", message: ""})
  document.getElementById('myForm').reset();
  alert("sent!")


}



  return (
    <div className="contactWrapper">
      <h1 id="contact">Contact</h1>
      <p>Feel free to send me a message blablabla buzzwords</p>
      <form id="myForm" onSubmit={sendMessage}>
      <div className="nameEmailWrapper">

      <input type="text" name="name" className="nameInput" placeholder="Name" onChange={setName} value={data.name}>

      </input>

      <input type="text" name="email"className="emailInput" placeholder="Email" onChange={setEmail} value={data.email}>

      </input>

      </div>

      <textarea placeholder="Message..." name="message" className="messageArea font" rows="60" onChange={setMessage} value={data.message}>


      </textarea>
      <button className="contactButton" type="submit">Send Message</button>
      </form>


    </div>
  )
}

export default Contact;