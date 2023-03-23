import React from 'react';

function Button(props) {
    const {getActivity,buttonDisabled}=props
    return (
        <button className='generate-activity-button' onClick={getActivity} disabled={buttonDisabled}>Generate Activity</button>
    );
}

export default Button;