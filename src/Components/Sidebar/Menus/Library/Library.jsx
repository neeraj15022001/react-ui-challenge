import React from "react";
import {
  DiscFill,
  ArrowCounterclockwise,
  SuitHeartFill,
  FolderFill,
} from "react-bootstrap-icons";
import ListHeadline from "../ListHeadline/ListHeadline";
import ListItem from "../ListItem/ListItem";

function Library({ className }) {
  return (
    <div className={`${className} w-100 px-2`}>
      <ListHeadline title="library" className="mb-2" />
      <ListItem icon={<ArrowCounterclockwise />} title="recent" />
      <ListItem icon={<DiscFill />} title="albums" />
      <ListItem icon={<SuitHeartFill />} title="favourites" />
      <ListItem icon={<FolderFill />} title="local" />
    </div>
  );
}

export default Library;
