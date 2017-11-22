import React from 'react';

// This is a stateless component *hotkey: rsc
const ContestPreview = (contest) => {
  return (
    <div className = "ContestPreview">
      <div className = "category-name">
        {contest.categoryName}
      </div>
      <div className = "contest-name" >
        {contest.contestName}
      </div>
    </div>
  );
};


export default ContestPreview;
