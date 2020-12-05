const logger = (param) => (store) => (next) => (action) => {
  console.log("Loging", param);
  //after call action will go ahead
  next(action);
};

export default logger;
