import { useEffect, useRef, useState } from 'react';

export default class GlobalState {
  state = {};

  listeners = [];

  constructor(reducer, initialState = {}) {
    this.reducer = reducer;
    this.state = initialState;
  }

  listen(listener) {
    this.listeners.push(listener);
  }

  unlisten(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  dispatch = (actionName, payload) => {
    const nextState = this.reducer(this.state, actionName, payload);
    if (nextState !== this.state) {
      this.state = nextState;
      this.listeners.forEach((l) => l(nextState));
    }
  };
}

export function useGlobalState(globalState, stateGetter) {
  const [state, setState] = useState(stateGetter(globalState.state));

  // We don't want to re-create the listener as we want to unlisten on unmount
  // of the component which uses this hook, so we "tunnel" the state in.
  const stateRef = useRef(state);
  stateRef.current = state;

  const listener = useRef((nextState) => {
    const stateUpdate = stateGetter(nextState);
    if (stateRef.current !== stateUpdate) {
      setState(stateUpdate);
    }
  });

  useEffect(() => {
    globalState.listen(listener.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => globalState.unlisten(listener.current);
  }, [globalState]);

  return [state, globalState.dispatch];
}


