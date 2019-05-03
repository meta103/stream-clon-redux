import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {
  //Este paso es importante para hacer isolacion: llamamos a la info de la API desde aqui tambien, no solo desde la home page.
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)

  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return <div> {this.props.stream.title} </div>
  }
}


//El segundo parametro, ownProps, hace referencia a las props que vienen dadas por el router dom (History, location, match, etc)
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
