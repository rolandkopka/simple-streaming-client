import React from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { fetchStreams } from "../../actions";

import {
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Typography
} from "@material-ui/core";

import VideocamIcon from "@material-ui/icons/Videocam";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <ListItemSecondaryAction>
          <IconButton component={RouterLink} to={`/streams/edit/${stream.id}`}>
            <EditIcon />
          </IconButton>
          <IconButton
            component={RouterLink}
            to={`/streams/delete/${stream.id}`}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <ListItem key={stream.id}>
          <ListItemAvatar>
            <Avatar>
              <VideocamIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={stream.title} secondary={stream.description} />
          {this.renderAdminButtons(stream)}
        </ListItem>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Button component={RouterLink} to="/streams/new">
          {"Create Stream"}
        </Button>
      );
    }
  }

  render() {
    return (
      <>
        <Typography variant="h3">Streams</Typography>
        <List>{this.renderList()}</List>
        {this.renderCreate()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
