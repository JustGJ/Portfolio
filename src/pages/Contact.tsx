import React, { useState } from 'react';

declare global {
    interface Window {
        emailjs: any;
    }
}

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const isEmail = (email: any) => {
        const mail = document.getElementById('not-mail') as HTMLElement;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex) && mail !== null) {
            mail.style.display = 'none';
            console.log('ok');
            return true;
        } else if (mail !== null) {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout(() => {
                mail.style.animation = 'none';
            }, 1000);
            return false;
        }
    };

    const failMessage = (message?: any) => {
        let formMess = document.querySelector('.form-message') as HTMLElement;
        if (formMess !== null) {
            // formMess.innerHTML=message
            // formMess.innerHTML = 'Merci de remplir les champs requis *';
            formMess.style.opacity = '1';
            formMess.style.background = 'rgb(253,87,87)';

            document.getElementById('name')?.classList.add('error');
            document.getElementById('email')?.classList.add('error');
            document.getElementById('message')?.classList.add('error');
        }
    };

    const succesMessage = () => {
        let formMess = document.querySelector('.form-message') as HTMLElement;
        formMess.style.opacity = '1';
        formMess.style.background = '#00c1ec';

        document.getElementById('name')?.classList.remove('error');
        document.getElementById('email')?.classList.remove('error');
        document.getElementById('message')?.classList.remove('error');

        setTimeout(() => {
            formMess.style.opacity = '';
        }, 5000);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
        if (name && isEmail(email) && message) {
            console.log('dans if');
            sendFeedback('template_ojalfod', { name, email, message });
        } else {
            failMessage();
            // failMessage("'Merci de remplir les champs requis *'")
        }
    };

    const sendFeedback = (templateId: any, variables: any) => {
        window.emailjs
            .send('gmail', templateId, variables)
            .then((res: any) => {
                console.log('success');
                succesMessage();
                setName('');

                setEmail('');
                setMessage('');
            })
            .catch((err: any) => setFormMessage("Une erreur s'est produite, veuillez réessayer."));
    };
    // failMessage("Une erreur s'est produite, veuillez réessayer.")
    return (
        <div className="contact">
            <h1 className="contact__title">Contact</h1>
            <form className="contact__form">
                <h2>Contactez-moi</h2>
                <div className="contact__form__content">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="nom *"
                        value={name}
                        autoComplete="off"
                    />

                    <div className="content__email">
                        <label className="not-mail">Email non valide</label>
                        <input
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email *"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message *"
                        value={message}
                    />
                </div>
                <button className="contact__form__submit" type="submit" onClick={handleSubmit}>
                    Envoyer
                </button>

                <div className="form-message"></div>
            </form>
        </div>
    );
};

export default App;
