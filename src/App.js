import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

const intro = {
    "ro": "Raspunde la urmatorul formular pentru a-ti afla interesele profesionale ascunse",
    "en": 'Answer the form to find out your professional hidden interests'
}

const hiddenCheatTest = function () {
    document.querySelectorAll('.option:nth-of-type(1) input').forEach(function (elem, index) {
        elem.checked = true;
    })
}

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            lang: 'en'
        };
    }

    changeLanguage(lang) {
        document.querySelector('html').setAttribute('lang', lang);

        this.setState({
            lang: lang
        });
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">

                    <Langs
                        lang={this.state.lang}
                        changeLanguage={this.changeLanguage.bind(this)}>
                    </Langs>

                    <img src={logo} className="App-logo" alt="logo" onClick={hiddenCheatTest}/>
                    <h2>
                        <div className="welcome">Welcome!</div>
                        <div>
                            {intro[this.state.lang]}
                        </div>
                    </h2>
                </div>

                <Form
                    lang={this.state.lang}>
                </Form>

            </div>
        );
    }
}

export default App;


const languages = ['en', 'ro'];

class Langs extends Component {

    constructor (props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <div className="languages">
                {languages.map(function(lang, index) {
                    return (
                        <span
                            className={"language " + (this.props.lang===lang ? 'active': '')}
                            key={lang}
                            onClick={this.props.changeLanguage.bind(this, lang)}
                            >
                                {lang}
                        </span>
                    )
                }.bind(this))
                }
            </div>
        );
    }
}
