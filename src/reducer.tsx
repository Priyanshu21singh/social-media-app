// Define the state type
interface State {
    // Add your state properties here
  }
  
  // Define the action type
  type Action = {
    type: string;
    payload?: any;
  };
  
  // Define your initial state
  const initialState: State = {
    // Initial state properties
  };
  
  // Create your reducer function
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      // Handle different action types and modify the state accordingly
      case "SET_DATA":
        return {
          ...state,
          // Update state based on the action
          // For example: data: action.payload
        };
      // Add more cases for different action types as needed
      default:
        return state;
    }
  };
  
  export { initialState, reducer };
  