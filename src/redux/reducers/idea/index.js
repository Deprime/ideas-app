import {
  LOAD_IDEAS, LOAD_IDEAS_FAILURE, LOAD_IDEAS_SUCCESS,
  CREATE_IDEA, CREATE_IDEA_SUCCESS, CREATE_IDEA_FAILURE,
  UPDATE_IDEA, UPDATE_IDEA_SUCCESS, UPDATE_IDEA_FAILURE,
  DELETE_IDEA, DELETE_IDEA_SUCCESS, DELETE_IDEA_FAILURE,
  RESTORE_IDEA, RESTORE_IDEA_SUCCESS, RESTORE_IDEA_FAILURE,
} from "./actions";

const initialIdeasState = {
  pagination: {},
  page: 1,
  loading: false,
  error: null,
  data: [],
};

export default function ideasReducer(state = initialIdeasState, action) {
  switch (action.type) {
    // Load cases
    case LOAD_IDEAS: {
      const { page } = action.payload;
      return  {
        ...state,
        loading: true,
        page,
      };
    }

    case LOAD_IDEAS_SUCCESS: {
      // Synthetic page param update
      const { origin, pathname, search } = window.location;
      const urlParams = new URLSearchParams(search);
      urlParams.set("page", action.payload.pagination.current_page);
      const newSearch = urlParams.toString();
      const url = `${origin}${pathname}?${newSearch}`;
      window.history.replaceState({}, null, url);

      return {
        ...state,
        loading: false,
        data: action.payload.data,
        pagination: action.payload.pagination,
      };
    }

    case LOAD_IDEAS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    /**
     * Create cases
     */
    case CREATE_IDEA: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_IDEA_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case CREATE_IDEA_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    /**
     * Update cases
     */
    case UPDATE_IDEA: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_IDEA_SUCCESS: {
      const record = action.payload;
      const data = state.data.map(row => {
        return (row.id === record.id) ? record : row
      });

      return {
        ...state,
        loading: false,
        data,
      };
    }

    case UPDATE_IDEA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    /**
     * Delete cases
     */
    case DELETE_IDEA: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_IDEA_SUCCESS: {
      const record = action.payload;
      const data = state.data.map(row => {
        return (row.id === record.id) ? record : row
      });

      return {
        ...state,
        loading: false,
        data,
      };
    }

    case DELETE_IDEA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    /**
     * Restore cases
     */
    case RESTORE_IDEA: {
      return {
        ...state,
        loading: true,
      };
    }

    case RESTORE_IDEA_SUCCESS: {
      const record = action.payload;
      const data = state.data.map(row => {
        return (row.id === record.id) ? record : row
      });

      return {
        ...state,
        loading: false,
        data,
      };
    }

    case RESTORE_IDEA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
