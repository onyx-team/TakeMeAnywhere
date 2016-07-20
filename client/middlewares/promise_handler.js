export default function({dispatch}) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // If payload is promise, stop action and allow to finish
    //create new var with finished result
    //send it back up to the action creator to be reprocessed
    action.payload
      .then(function(result) {
        /*
         * Fancy way of saying reassigning new payload to existing & unmodified action obj
        -----------------------------------------*/
        const newAction = { ...action, payload: result };
        dispatch(newAction);
      });
  }
}