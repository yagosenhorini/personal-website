import { InitialStateProps } from './interfaces';
import * as t from './types';

export const initialState: InitialStateProps = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  user: null,
};

// eslint-disable-next-line default-param-last
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case t.LOADING:
      return { ...state, isLoading: payload };
    case t.ERROR:
      return { ...state, isError: payload };
    case t.SUCCESS:
      return { ...state, isSuccess: payload };
    case t.USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
