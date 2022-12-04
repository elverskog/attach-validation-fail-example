const schema = {
  schema: {
    description: "a submission of the login form",
    body: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { 
          type: 'string',
          maxLength: 1,
        }
      }
    },
    response: {
      default: {
        type: 'string'
      }
    }
  }
};

export default schema;