import React from "react";
import { Redirect } from "react-router-dom";
import Form from "../components/Form";
import { connect } from 'react-redux';

class RegisterPage extends React.Component {
  render() {
    const { sent } = this.props;
    return (
      <section className="home-main">
        <Form />
        {sent && <Redirect to="/clients" />}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  sent: state.sendFormReducer.sent,
})

export default connect(mapStateToProps, null)(RegisterPage);
