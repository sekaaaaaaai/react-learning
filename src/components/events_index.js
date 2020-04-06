import React, { Component } from 'react';
import {connect} from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash'
// import { Link } from 'react-router-dom';

import {
  Fab,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  TableHead
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class EventsIndex extends Component {

  componentDidMount(){
    this.props.readEvents();
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell><Link to={`/events/${event.id}`}>{event.title}</Link></TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
      justifycontent: "space-between"
    }

    const tableStyle = {
      minWidth: 100
    }

    return(
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell style={tableStyle}>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </TableContainer>
        <Fab style={style} color="primary" aria-label="add" href="/events/new">
          <AddIcon/>
        </Fab>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({ events: state.events});
const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
