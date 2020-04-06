import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { getEvent, deleteEvent, putEvent } from '../actions';
import {
  Button,
  TextField
} from '@material-ui/core';

class EventsShow extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount(){
    const {id} = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderTextField(field) {
    const { input, label, type, meta: {touched, error} } = field

    return (
    <div>
      <TextField
        {...input}
        placeholder={label} 
        label={label}
        type={type}
        error={touched && error}
        helperText={touched && error}
      />
    </div>
    );
  }

  async onSubmit(values){
    await this.props.putEvent(values);
    this.props.history.push('/');
  }

  async onDeleteClick(){
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id)
    this.props.history.push('/');
  }

  render() {
    const {handleSubmit, pristine, submitting, invalid} = this.props
    const buttonStyle = {
      margin: 12
    }

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderTextField}/>
          <Field label="Body" name="body" type="text" component={this.renderTextField}/>

          <div>
            <Button variant='contained' style={buttonStyle} type="submit" value="Submit" disabled={pristine || submitting || invalid}>Submit</Button>
            <Button variant='contained' style={buttonStyle} href="/">Cancel</Button>
            <Button variant='contained' color= 'secondary' style={buttonStyle} onClick={this.onDeleteClick} >Delete</Button>
            
          </div>
        </div>
      </form>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent });

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: "eventShowForm", enableReinitialize: true})(EventsShow)
);
