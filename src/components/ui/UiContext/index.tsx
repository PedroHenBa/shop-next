import { createContext, ReactNode, useContext, useReducer } from 'react';

export type UiContextProps = {
  children: ReactNode;
};

export type StateModifiers = {
  openSidebar: () => void;
  closeSidebar: () => void;
};

export type StateValues = {
  isSidebarOpen: boolean;
};

const stateModifiers = {
  openSidebar: () => {
    //
  },
  closeSidebar: () => {
    //
  },
};

type Action = {
  type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR';
};

const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

const UIContext = createContext<State>({ ...stateModifiers, ...initialState });

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return { ...state, isSidebarOpen: true };
    case 'CLOSE_SIDEBAR':
      return { ...state, isSidebarOpen: false };
    default:
      return { ...state };
  }
}

export const UiContext = ({ children }: UiContextProps) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const buildActions = {
    openSidebar: () => dispatch({ type: 'OPEN_SIDEBAR' }),
    closeSidebar: () => dispatch({ type: 'CLOSE_SIDEBAR' }),
  };

  const uiState = {
    ...buildActions,
    isSidebarOpen: state.isSidebarOpen,
  };

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUi = () => {
  const context = useContext(UIContext);
  return context;
};
