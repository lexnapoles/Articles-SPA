const asyncActionTypes = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
});

export const FETCH_ARTICLES = asyncActionTypes('FETCH_ARTICLES');
