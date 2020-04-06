import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { postEvent } from '../actions';
import {
  Button,
  TextField
} from '@material-ui/core';

class EventsNew extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderTextField(field) {
    const { input, label, type, meta: {touched, error} } = field
    return (
      <div>
        <TextField
          {...input}
          placeholder={label}
          type={type}
          label={label}
          error={touched && error}
          helperText={touched && error}
        />
      </div>
    );
  }

  async onSubmit(values){
    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  render() {
    const {handleSubmit, pristine, submitting, invalid} = this.props
    const style = { margin: 12 }

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderTextField}/>
          <Field label="Body" name="body" type="text" component={this.renderTextField}/>

          <div>
            <Button variant="contained" type="submit" value="Submit" style={style} disabled={pristine || submitting || invalid}>Submit</Button>
            <Button variant="contained" style={style} href="/">Cancel</Button>
          </div>
        </div>
      </form>
    );
  }
};

const mapStateToProps = null;
const mapDispatchToProps = ({ postEvent });

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: "eventNewForm"})(EventsNew)
);
