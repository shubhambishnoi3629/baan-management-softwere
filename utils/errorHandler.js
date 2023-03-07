export const handelError = (method) => {
  return async (req, res) => {
    await method(req, res).catch((error) => {
      if (error.type === 'NOT_AUTHORIZED') {
        res.status(400).send({
          message: error.message
        });
      } else {
        res.status(500).send({
          message: error.message
        });
      }
    })
  }
};
