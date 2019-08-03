import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import {
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";

export class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
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
        </ListItem>
      );
    });
  }

  render() {
    return <List>{this.renderList()}</List>;
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
