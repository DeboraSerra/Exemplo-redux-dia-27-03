import React from "react";
import { connect } from 'react-redux';
import { addClient, sendForm } from '../redux/actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      email: '',
      interests: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  sendForm = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { name, age, email, interests } = this.state;
    const id = Math.random();
    dispatch(addClient({ id, name, age, email, interests}));
    dispatch(sendForm);
    this.setState({
      name: '',
      age: 0,
      email: '',
      interests: '',
    })
  }

  render() {
    const { name, age, email, interests } = this.state;
    return (
      <form onSubmit={ this.sendForm }>
        <fieldset>
          <legend>Cadastro</legend>
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
          />
          <input
            type="number"
            name="age"
            value={ age }
            onChange={ this.handleChange }
            placeholder="Idade"
          />
          <textarea
            name="interests"
            value={ interests }
            onChange={ this.handleChange }
            placeholder="Interesses"
          />
        </fieldset>
        <button type="submit" onClick={ this.sendForm }>Enviar</button>
      </form>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   sendClient: (client) => dispatch(addClient(client)),
//   submitForm: () => dispatch(sendForm)
// })

export default connect()(Form);
