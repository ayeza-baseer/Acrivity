import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const { activities, toggleActivity } = props;
  return (
    <ul>
      {activities &&
        activities.map((activity) => (
          <ListItem activityItem={activity} toggleActivity={toggleActivity} />
        ))}
    </ul>
  );
}

export default List;
