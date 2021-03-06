import { RESET_PASSWORD_SUCCEEDED } from "./reset-password.actions";
import * as _ from 'lodash';

export const resetPassword = (state = { reset: false }, action) => {
  switch (action.type) {
    case RESET_PASSWORD_SUCCEEDED:
      return _.assign({}, state, { reset: true });

    default:
      return state;
  }
}
