import React from 'react';

function ActivityButton(props) {
    const {expanded,toggleActivity,_id}=props
    return (
        <button onClick={() => toggleActivity(_id)}>
        {expanded ? "Collapse" : "Expand"}
      </button>
    );
}

export default ActivityButton;