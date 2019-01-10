// Manages the state of all UI components which rely on Redux
// This is currently limited to the LoadingModal.

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ui/loading/hide':
      return {
        ...state,
        loading: false,
      };

    case 'ui/loading/show':
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const isLoading = state => state.ui.loading;

export const Store = ({
  isLoading,
});
