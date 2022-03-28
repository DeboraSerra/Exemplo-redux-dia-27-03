import React from "react";
import { connect } from 'react-redux';
import { newForm, removeClient } from '../redux/actions';

// class ClientList extends React.Component {
//   render() {
//     const { clients, location: { pathname }, removeClient } = this.props;
//     console.log(dispatch)
//     pathname === "/clients" && dispatch(newForm);
//     return (
//       <section className="home-main">
//         <h2>Lista de clientes</h2>
//         <ul className="client-list">
//           {clients.map((client) => (
//             <li className="client" key={ client.id }>
//               <button onClick={ () => removeClient(client) }>X</button>
//               <h3>{client.name}</h3>
//               <p>{client.email}</p>
//               <p>{client.age}</p>
//               <p>{client.interests}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   // newForm: () => dispatch(newForm),
//   removeClient: (client) => dispatch(removeClient(client))
// })

// const mapStateToProps = (state) => ({
//   clients: state.clientsReducer.clients,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ClientList);

class ClientList extends React.Component {
  render() {
    const { location: { pathname }, dispatch, clients } = this.props;
    pathname === "/clients" && dispatch(newForm);
    return (
      <section className="home-main">
        <h2>Lista de clientes</h2>
        <ul className="client-list">
          {clients.map((client) => (
            <li className="client" key={ client.id }>
              <button onClick={ () => dispatch(removeClient(client)) }>X</button>
              <h3>{client.name}</h3>
              <p>{client.email}</p>
              <p>{client.age}</p>
              <p>{client.interests}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
})

export default connect(mapStateToProps)(ClientList);
