export const handelError = (method) => {
  return async (req, res) => {
    await method(req, res).catch((error) => {
      res.status(200).send({
        message: error.message
      });
    })
  }
};
