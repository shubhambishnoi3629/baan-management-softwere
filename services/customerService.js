import { CustomerModel } from "../models/customerModel.js";

export class CustomerService {
  
  constructor() { };

  async createCustomer(data) {
    let customer = await CustomerModel.findOne({
      email: data.email,
    });
    if (customer) {
      throw  { message: "email is already in use." };
    }

    customer = await CustomerModel.create(data);

    return customer;
  }

  async login(email, password) {
    return CustomerModel.findOne({
      email: email,
      password: password,
    });
  };
};  