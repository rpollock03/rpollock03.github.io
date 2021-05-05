import React, {useState} from "react"

import axios from 'axios';

import "./Contact.css"

function Contact() {

    const [data, setData] = useState({ name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: '' })


    const handleChange = (e)=>{
        const {id, value} = e.target
        setData({
            ...data,
            [id]: value
        })
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(data)
         setData({
            ...data,
            buttonText: 'Sending...'
        })
        axios.post('/api/sendmail', data)
        .then(res => {
            if(res.data.result !=='success') {
                setData({
                    ...data,
                    buttonText: 'Failed to send',
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'Sent',
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            //console.log(err.response.status)
            setData({
                ...data,
                buttonText: 'Failed to send',
                err: 'fail'
            })
        })

    }


    return <section id="contact" className="pt-5">
        <div id="contact-intro">
            <div className="container">

                <h3 className="pt-4 section-title text-white font-weight-bold text-center mb-4">How do you take your coffee? ☕</h3>
                <div className="section-intro mx-auto text-center mb-5 text-white">
                    I'd love to chat about any of my projects, working together, learning opportunities or just a general natter about all things code! You can reach me via any of the following:
                 <ul className="list-inline list-unstyled  pt-2 mt-4">
                        <li className="social-icon list-inline-item text-white"><a href="https://twitter.com/bobbytbls" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li className=" social-icon list-inline-item text-white"><a href="https://www.facebook.com/rpollock03/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li className="social-icon list-inline-item text-white"><a href="https://github.com/rpollock03" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li className="social-icon list-inline-item text-white"><a href=""><i class="fab fa-instagram" target="_blank"></i></a></li>
                        <li className="social-icon list-inline-item text-white">
                            <a href=""><i class="far fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
                <form className="mx-md-5 my-5 " style={{ padding: "40px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 15px 30px 0 rgb(0 0 0 / 20%)" }}>
                    <h3 className="text-center py-2">Send me a message:</h3>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="John Smith" 
                            onChange={handleChange}
                            value={data.name}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Your email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="john.smith@gmail.com" 
                            onChange={handleChange}
                            value={data.email}
                        />
                    </div>
                    <div className="form-group">
                        <label for="message">Message:</label>
                        <textarea 
                            className="form-control" 
                            id="message" 
                            placeholder="Your message here" 
                            rows="6" 
                            onChange={handleChange}
                            value={data.message}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">{data.buttonText}</button>
                </form>
            </div>

            <nav id="navbar-footer" class="navbar navbar-expand-lg sticky-bottom">
                <div className="container justify-content-center">
                    <span class="navbar-brand">Made with Bootstrap, React and ❤️ <span className="d-none d-md-inline">- © Robert Pollock 2021</span> </span>
                </div>

            </nav>
        </div>

    </section>
}

export default Contact