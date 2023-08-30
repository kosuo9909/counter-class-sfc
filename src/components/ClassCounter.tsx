import { Component } from 'react';

interface CounterProps {
  displayUpdates: boolean;
}

interface CounterState {
  counter: number;
}

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    counter: 0,
  };

  updateCounter = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  intervalId?: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log(
        'Count about to be updated:',
        this.state.counter,
        this.state.counter + 1,
      );

      this.updateCounter();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  shouldComponentUpdate(nextProps: CounterProps) {
    return nextProps.displayUpdates;
  }
  componentDidUpdate(): void {
    console.log('Count was updated:', this.state.counter);
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}
