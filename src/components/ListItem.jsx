import React from 'react';
import ActivityButton from './ActivityButton';

function ListItem(props) {
    const {activityItem,toggleActivity}=props;
    const {_id,activity,type,participants,price,link,key,accessibility,expanded}=activityItem
    return (
        <li className='spaced-items-below' key={_id}>
                <label className="spaced-items">{activity}</label>
                <ActivityButton expanded={expanded} toggleActivity={toggleActivity} _id={_id}/>
                {expanded && (
                  <div className="centerActivity">
                    <ul>
                      <li>type: {type}</li>
                      <li>participants: {participants}</li>
                      <li>price: {price}</li>
                      <li>link: {link}</li>
                      <li>key: {key}</li>
                      <li>accessibility: {accessibility}</li>
                    </ul>
                  </div>
                )}
              </li>
    );
}

export default ListItem;