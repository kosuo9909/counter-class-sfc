import React, { useEffect, useState } from 'react';

interface IFunctionalCounterProps {
  displayUpdates: boolean;
}

const FunctionalCounter: React.FC<IFunctionalCounterProps> = ({
  displayUpdates,
}) => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  // This useEffect is responsible for the interval
  useEffect(() => {
    const interval = setInterval(() => {
      updateCounter();
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, [updateCounter]);

  // This useEffect is responsible for logging
  useEffect(() => {
    if (displayUpdates) {
      console.log('Count about to be updated:', counter, counter + 1);
    }
  }, [counter, displayUpdates]);

  return <div>{displayUpdates ? counter : 'Updates are hidden'}</div>;
};

export default FunctionalCounter;
