export function getFinalState(baseState, queue) {
    let finalState = baseState;
    for (let item in queue) {
      if (typeof queue[item] === 'function') {
        finalState = queue[item](finalState);
      } else {
        finalState = queue[item];
      }
    }
    return finalState;
  }
  