const counter = (count=0, action) => {
  switch(action.type) {
    case 'COUNTER':
      switch (action.behavior) {
        case 'INCREMENT':
          return count + 1;
          // falls through
        case ' DECREMENT':
          return count - 1;
        // falls through
      }
      // falls through
    default:
      return count;
  }
};

export default counter;