import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { clients } = this.props;
    const numClient = clients.length;
    return (
      <header>
        <h1>Seja nosso cliente!</h1>
        <nav>
          <Link className="link-nav" to="/">Home</Link>
          <Link className="link-nav" to="/clients">Lista de clientes</Link>
          <Link className="link-nav" to="/register-client">Cadastro de clientes</Link>
        </nav>
        <p>Número de clientes: {numClient}</p>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
});

export default connect(mapStateToProps, null)(Header);
