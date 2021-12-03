import React, { useState, useRef } from 'react';
import Loader from 'react-loader-spinner';
import cv from '../assets/images/jeff-gasparini.pdf';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

declare global {
    interface Window {
        emailjs: any;
    }
}
const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [loading, setLoading] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const isEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            setEmailError(false);
            return true;
        } else {
            setEmailError(true);
            return false;
        }
    };

    const successMessage = () => {
        if (ref.current !== null) {
            ref.current.innerHTML = 'Message envoyé ! Je vous répondrez dès que possible.';
            ref.current.classList.remove('form__message--error');
            ref.current.classList.add('form__message--success');
        }
        setName('');
        setEmail('');
        setMessage('');

        setNameError(false);
        setEmailError(false);
        setMessageError(false);
    };

    const sendFeedback = (templateId: string, variables: Object) => {
        window.emailjs
            .send('gmail', templateId, variables)
            .then((res: any) => {
                setLoading(false);
                successMessage();
            })
            .catch((err: any) => {
                ref.current !== null &&
                    (ref.current.innerHTML = "Une erreur s'est produite, veuillez réessayer.");
            });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && isEmail(email) && message) {
            setLoading(true);
            sendFeedback('template_ojalfod', { name, email, message });
        } else {
            !name && setNameError(true);
            !email && setEmailError(true);
            !message && setMessageError(true);

            if (ref.current !== null) {
                ref.current.innerHTML = 'Merci de remplir correctement les champs requis *';
                ref.current.classList.remove('form__message--success');
                ref.current.classList.add('form__message--error');
            }
        }
    };

    return (
        <div className="contact">
            <h1 className="contact__title">Contact</h1>
            <p className="contact__desc">Vous souhaitez me contacter ?</p>
            <div className="contact__content">
                {window.innerWidth >= 550 ? <div className="contact__header"></div> : ''}
                <div className="contact__container">
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <h2>Contactez-moi</h2>
                        <div className="contact__form__social">
                            <a href="https://github.com/JustGJ">
                                <i className="fab fa-github" />
                            </a>
                            <a href="https://www.linkedin.com/in/jeff-gasparini-%E2%9A%9B%EF%B8%8F-4b9ba0221/">
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                        <div className="contact__form__content">
                            <input
                                className={nameError ? 'error' : ''}
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="nom *"
                                value={name}
                                autoComplete="off"
                            />

                            <div className="content__email">
                                {emailError && (
                                    <label className="content__email--error">
                                        Email non valide
                                    </label>
                                )}
                                <input
                                    className={emailError ? 'error' : ''}
                                    type="mail"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email *"
                                    value={email}
                                    autoComplete="off"
                                />
                            </div>
                            <textarea
                                className={messageError ? 'error' : ''}
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="message *"
                                value={message}
                            />
                        </div>
                        <button className="contact__form__submit" type="submit">
                            Envoyer
                        </button>
                        {loading ? (
                            <div className="form__loading">
                                <Loader type="Oval" color="#ffe9c7" height={45} width={45} />
                            </div>
                        ) : (
                            <div ref={ref} className="form__message"></div>
                        )}
                    </form>

                    <div className="contact__social">
                        <div className="contact__social__details">
                            <span>jf.gasp@gmail.com</span>
                            <span>0782435296</span>
                            <a href={cv} download="jeff-gasparini.pdf">
                                <i className="fas fa-cloud-download-alt" />
                                <span>CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
