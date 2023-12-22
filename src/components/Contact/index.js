import './Contact.css';


function Contact() {
    return (

        <div className="content4">
            <h1 className="head"><strong>Contact Me</strong></h1>
            <form action="/form-handling-url" method="post">
                <fieldset className="ff">
                    <div className="if">
                        <div className="row">
                            <label className="label" for="email">Your Email:</label>
                            <input className="inputrow" type="email" id="email" name="email_address"/>
                        </div>
                        <div className="row">
                            <label className="label" for="Subject">Subject:</label>
                            <input className="inputrow" type="text" id="subject" name="first_name"/>
                        </div>
                        <div className="row">
                            <label className="label" for="comments">Message:</label>
                            <textarea className="inputarea" id="comments" name="comments"></textarea>
                        </div>

                        <div className="checkboxarea">
                            <input className="checkbox" type="checkbox" id="reply" name="reply" value="reply"/>
                                <label className="checkboxtext" for="reply">Require response</label>
                        </div>
                        <div className="buttonrow">
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Contact;