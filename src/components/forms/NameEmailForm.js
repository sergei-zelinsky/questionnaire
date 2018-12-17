import React, { Component } from 'react';
import Input from '../input/Input';
import { validateEmail, validateName } from '../../services/validation';
import './Forms.scss';

class NameEmailForm extends Component {
    constructor(props) {
        super(props);
        const { name, email } = this.props;
        this.state = { name, email };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });

        if (name === 'email' && validateEmail(value)) {
            this.setState({ validEmail: true });
            this.sendToStore();
        }
        else
            this.setState({ validEmail: false });

        if (name === 'name' && validateName(value)) {
            this.setState({ validName: true });
            this.sendToStore();
        }
        else
            this.setState({ validName: false });
    }

    sendToStore = () => {
        const { action } = this.props;
        const { name, email, validName, validEmail } = this.state;
        action(name, email);
    }

    render() {
        const { name, email, validName, validEmail } = this.state;
        return (
            <form>
                <h2>1. Введите имя и e-mail</h2>
                <Input
                    name='name'
                    value={name}
                    placeholder='Имя'
                    error={validName === false ? 'Имя должно состоять из букв латинского или русского алфавита' : ''}
                    onChange={this.handleInputChange}
                />
                <Input
                    name='email'
                    type='email'
                    error={validEmail === false ? 'Неправильный email' : ''}
                    value={email}
                    placeholder='e-mail'
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}


export default NameEmailForm;