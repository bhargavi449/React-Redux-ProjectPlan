const { combineReducers } = require("redux");
const { default: authReducer } = require("./authReducer");
const { default: projectReducer } = require("./projectReducer");


const rootReducer = combineReducers({
    auth: authReducer, //will update information on the auth property
    project: projectReducer //will update information on the project property inside state object
    // we combine these 2 properties with these root reducer
})

export default rootReducer;