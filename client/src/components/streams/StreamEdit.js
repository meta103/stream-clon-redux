import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = props => {
  console.log(props)
  return (
    <div>
      StreamEdit
    </div>
  )
};

//El segundo parametro, ownProps, hace referencia a las props que vienen dadas por el router dom (History, location, match, etc)
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps)(StreamEdit);
