export function getFinalState(baseState, queue) {
    let finalState = baseState;
    for (let item of queue) {
      if (typeof item === 'function') {
        finalState = item(finalState);
      } else {
        finalState = item;
      }
    }
    return finalState;
  }
  