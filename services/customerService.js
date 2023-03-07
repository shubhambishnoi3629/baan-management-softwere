export class CustomerService {
  customerModel;
  bhaaiService;
  constructor(customerModel, bhaaiService) {
    this.customerModel = customerModel;
    this.bhaaiService = bhaaiService;
   };

  async createCustomer(data) {
    let customer = await this.customerModel.findOne({
      email: data.email,
    });
    if (customer) {
      throw  { message: "email is already in use." };
    }

    customer = await this.customerModel.create(data);
    this.bhaaiService.getOrCreateBhaai();
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

  async addPariwarRolesInCustomer(pariwarRole) { 
     return this.customerModel.findOneAndUpdate( 
      {       
       _id: pariwarRole.customerId
      },      {
        $push: { pariwarRoles: pariwarRole }      
      },
      {        
        new : 1
      }
    );  
  }

  async updatePariwarRolesInCustomer(pariwarRole) {
    const customer = await this.customerModel.findOne({_id: pariwarRole.customerId});
    if (customer) {
      const index =  customer.pariwarRoles?.findIndex(i => i.pariwarId === pariwarRole.pariwarId );

      if (index > -1) {
        customer.pariwarRoles.splice(index,1,pariwarRole);
      } else {
        await this.addPariwarRolesInCustomer(pariwarRole);
      }
      await customer.save();
    }
  };
};  
