import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section className="home-main">
        <h2>Seja nosso cliente e receba emails chatos todos os dias!</h2>
        <Link className="home-link" to="/register-client">
          Cadastre-se!
        </Link>
      </section>
    )
  }
}

export default Home;
