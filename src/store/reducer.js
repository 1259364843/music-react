import { combineReducers } from 'redux';

// 导入单个reducer
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';

// 合并reducer
const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;