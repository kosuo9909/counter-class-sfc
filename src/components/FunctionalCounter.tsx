import React, { useEffect, useState, useMemo } from 'react';

interface IFunctionalCounterProps {
  displayUpdates: boolean;
}

const FunctionalCounter: React.FC<IFunctionalCounterProps> = ({
  displayUpdates,
}) => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prevState) => {
      console.log('Count about to be updated:', prevState, prevState + 1);
      return prevState + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateCounter();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const displayElement = useMemo(() => {
    console.log('Count was updated:', counter);
    return <div>{counter}</div>;
  }, [displayUpdates ? counter : null]);

  return displayElement;
};

export default FunctionalCounter;
