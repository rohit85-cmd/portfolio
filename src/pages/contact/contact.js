import "./contact.css";

import Github from "../../img//github.png"


import { useRef } from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';

import hackerrank from "../../img/Hackerrank.png"
import codechef from "../../img/codechef.png"
import leetcode from "../../img/leetcode.png"
const Contact = () => {
    
    const [done, setDone] = useState(false)
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();

        var empt = document.forms["form1"]["user_name"].value;
        var empt2 = document.forms["form1"]["user_subject"].value;
        var empt3 = document.forms["form1"]["user_email"].value;
        var empt4 = document.forms["form1"]["message"].value;
        if (empt === "" || empt2===""|| empt3 === "" || empt4==="") {
            alert("Please input a Value");
            return false;
        }



        emailjs.sendForm('service_4yzpgq2', 'template_sefm4um', formRef.current, 'user_wFFpHzDYujxqZCeRSEsFD')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });

        
    }

    return (
        <div className="c">
            <div className="c-bg" ></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Know More About Me
                    </h1>
                    <div className="c-info">

                        <div className="jm-logo ">
                            <a className="git" href="https://github.com/rohit85-cmd" target="_blank" rel="noreferrer">
                                <img src={Github} alt="" />
                            </a>
                            <a className="link" href="https://www.codechef.com/users/rohitjindamwar" target="_blank" rel="noreferrer">
                                <img src={codechef} alt="" />
                            </a>
                            <a className="twitt" href="https://www.hackerrank.com/rohitjindamwar11" target="_blank" rel="noreferrer">
                                <img src={hackerrank} alt="" />
                            </a>
                            <a className="mail" href="https://leetcode.com/booster_rj/" target="_blank" rel="noreferrer">
                                <img src={leetcode} alt="" />
                            </a>
                        </div>
                        <div className="c-email"><h3>rohit.jindamwar@walchandsangli.ac.in</h3></div>
                        <div className="c-phone">(+91) 9146198909</div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch!</b>
                        &emsp;Suggestions are welcomed...
                    </p>
                    <form name="form1" ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: "#333" }} type="email" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                    
                </div>
            </div>


        </div>
    )
}

export default Contact
