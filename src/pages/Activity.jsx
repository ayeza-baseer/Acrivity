import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import "./Activity.css";
import List from "../components/List";
function Activity() {
  const [activities, setActivities] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const getActivity = async () => {
    try {
      setButtonDisabled(true);

      const response = await axios.get("https://www.boredapi.com/api/activity");
      const data = response.data;
      const _id = uuidv4();
      setActivities([...activities, { ...data, _id, expanded: false }]);
      console.log(activities);
    } catch (error) {
      console.log(error);
    } finally {
      setButtonDisabled(false);
    }
  };
  const toggleActivity = (activityId) => {
    const copyActivity = [...activities];
    const activity = copyActivity.find(({ _id }) => _id == activityId);
    activity.expanded = !activity.expanded;
    console.log(activity, "activity");
    console.log(copyActivity);
    setActivities(copyActivity);
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <Button getActivity={getActivity} buttonDisabled={buttonDisabled} />
      <div className="centerActivity">
        <div>
          <List activities={activities} toggleActivity={toggleActivity} />
        </div>
      </div>
    </div>
  );
}

export default Activity;
