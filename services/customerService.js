export class CustomerService {
  customerModel
  constructor(customerModel) {
    this.customerModel = customerModel;
   };

  async createCustomer(data) {
    let customer = await this.customerModel.findOne({
      email: data.email,
    });
    if (customer) {
      throw  { message: "email is already in use." };
    }

    customer = await this.customerModel.create(data);

    return customer;
  }

  async login(email, password) {
    return this.customerModel.findOne({
      email: email,
      password: password,
    });
  }

  async search(searchFrom){
    console.log(searchFrom)
    return this.customerModel.find({
      email: { $regex: searchFrom, $options: 'i' },
    });
  }
};  
