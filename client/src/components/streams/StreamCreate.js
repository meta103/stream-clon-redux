import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//setup para llamadas a la API que hemos creado:
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //la siguiente variables solo para que cuando haya error, ponga error como atributo en la classname para que el contenido se torne rojo. Esto es un feature de semantic UI
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    //Porque tengo que llamar a props cuando tengo importado el createStream? 
    this.props.createStream(formValues)

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  //Redux form interpreta que todo va bien si le retornamos un objeto vacio, asi que hacemos lo siguiente:
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors
}

//Como conectar connect & redux form: (la sintax es "nasty...")
// export default connect() (reduxForm({
//   form: 'streamCreate',
//   validate
// })(StreamCreate));

//Una manera más limpia de conectar ambas cosas sería asi:

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
