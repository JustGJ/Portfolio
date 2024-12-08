import cv from '../assets/images/jeff-gasparini.pdf';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

declare global {
    interface Window {
        emailjs: any;
    }
}
const App = () => {
    return (
        <div className="contact">
            <div className="contact__content">
                {window.innerWidth >= 550 ? <div className="contact__header"></div> : ''}
                <div className="contact__container">
                    <div className="contact__social">
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}  className="contact__form__social">
                            <a style={{ marginRight: '30px', marginBottom: '15px'}} href="https://github.com/JustGJ">
                                <i className="fab fa-github" />
                            </a>
                            <a href="https://www.linkedin.com/in/jeff-gasparini-%E2%9A%9B%EF%B8%8F-4b9ba0221/">
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                        <div className="contact__social__details">
                            <span>jf.gasp@gmail.com</span>
                            <span>0782435296</span>
                            <a href={cv} download="jean-francois-gasparini.pdf">
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
