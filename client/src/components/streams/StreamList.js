import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    //funcion helper para mostart botoner EDIT / DELETE en caso de que el currentUserID es igual al que creó el stream 
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">EDIT</button>
          <button className="ui button negative">DELETE</button>
        </div>
      )
    }
  }

  //Aqui hacemos el map del array creado en mapStateToProps
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //Convertimos el objeto en array para luego hacer map más facil (la estructura actual del state es un objeto con keys y dentro cada stream)
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  }
}



export default connect(mapStateToProps, { fetchStreams })(StreamList);
