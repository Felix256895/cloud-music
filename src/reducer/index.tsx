import React from 'react';
import { RESPONSE_ERROR, RESPONSE_SUCCESS } from './action';

interface Action {
  type: string;
  result: any[];
  error: string;
}

function reducer(state: any[] = [], action: Action) {
  switch (action.type) {
    case RESPONSE_SUCCESS:
      return {
        result: action.result,
        loading: false
      };
    case RESPONSE_ERROR:
      return {
        error: action.error,
        loading: false
      };
  }
}
