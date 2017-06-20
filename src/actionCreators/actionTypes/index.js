/**
 * Actions are constants use by the stores, actions, and sagas to identify event types.
 *
 * @type {{BUTTON_BARS: {FETCH: string, SAVE: string, UPDATE: string}}}
 */
const ACTIONS = {
  BUTTON_BARS: {
    FETCH: 'buttonBars.fetch',
    SAVE: 'buttonBars.save',
    UPDATE: 'buttonBars.update'
  }
  // @TODO: [PAS] - it wound be very nice to include messages from the server, this would include errors and requests in flight.
  // MESSAGE: {
  //   SAVE: 'message.save',
  //   IS_ERROR: 'message.is_error',
  //   IN_FLIGHT: 'message.in_flight'
  // }
};

export { ACTIONS as default };
