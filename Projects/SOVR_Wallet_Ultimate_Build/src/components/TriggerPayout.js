import React from 'react';

const TriggerPayout = ({ data }) => {
  const { cashtag, amount } = data;
  const link = `https://cash.app/${cashtag}?amount=${amount}`;
  return (
    <div>
      <h3>Trigger Payout</h3>
      <a href={link} target="_blank" rel="noreferrer">
        <button>Send via Cash App</button>
      </a>
    </div>
  );
};

export default TriggerPayout;