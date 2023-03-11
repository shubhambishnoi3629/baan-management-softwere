class TokenManagment {
  jsonWebTokenList = new Map();

  saveToken(customerId, token) {
    this.jsonWebTokenList.set(customerId, token);
  };

  getToken(customerId) {
    return this.jsonWebTokenList.get(customerId);
  };
};

export const tokenManagment =  new TokenManagment();
