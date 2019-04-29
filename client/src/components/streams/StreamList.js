import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  //Aqui hacemos el map del array creado en mapStateToProps
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
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
  return { streams: Object.values(state.streams) }
}



export default connect(mapStateToProps, { fetchStreams })(StreamList);
