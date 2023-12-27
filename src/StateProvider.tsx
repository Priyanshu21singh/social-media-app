import React, { createContext, useContext, useReducer, ReactNode } from "react";


interface State {
  // Add your state properties here
}


type Action = {
  type: string;
  payload?: any;
};


interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}


export const StateContext = createContext<ContextValue | undefined>(undefined);


interface StateProviderProps {
  reducer: (state: State, action: Action) => State;
  initialState: State;
  children: ReactNode;
}


export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: ContextValue = {
    state,
    dispatch,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateValue = () => {
  const contextValue = useContext(StateContext);
  if (!contextValue) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return contextValue;
};
