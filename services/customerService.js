import { tokenManagment } from "../helper/tokenManagement.js";
import { jwtAuthentication } from "../utils/jwt.js";

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
    await this.bhaaiService.getOrCreateBhaai("BAAN GIVEN", customer._id);
    return customer;
  }

  async login(email, password) {
    let customer = await this.customerModel.findOne({
      email: email,
      password: password,
    });

    if (customer) {
      customer = this.sanitizeCustomer(customer);
    }

    return customer;
  }

  async getCustomerProfile(id){
    let customer = await this.customerModel.findOne({
      _id: id,
    }).populate({ 
      path: 'pariwarRoles',
      populate: {
        path: 'pariwarId',
        model: 'pariwar'
      } 
   });

    if (customer) {
      customer = this.sanitizeCustomer(customer);
    }

    return customer;
  }

  async search(searchFrom){
    return this.customerModel.find({
      email: { $regex: searchFrom, $options: 'i' },
    });
  }

  async addPariwarRolesInCustomer(pariwarRole) { 
    const customer = await this.customerModel.findOneAndUpdate( 
      {       
       _id: pariwarRole.customerId
      },      {
        $push: { pariwarRoles: pariwarRole }      
      },
      {        
        new : 1
      }
    );  
    customer && await this.updateCustomerToken(customer._id);

    return customer;
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
      this.updateCustomerToken(customer._id);
    }
  };
  async deletePariwarRoleInCustomer(pariwarRole) {
    const customer = await this.customerModel.findOne({_id: pariwarRole.customerId});
    if (customer) {
      const index =  customer.pariwarRoles?.findIndex(i => i.pariwarId === pariwarRole.pariwarId );

      if (index > -1) {
        customer.pariwarRoles.splice(index,1);
        await customer.save();
        this.updateCustomerToken(customer._id);
      }
    }
  };
  async updateCustomerToken(customerId) {
    const customer = await this.customerModel.findOne({
      _id: customerId,
    });

    const customerToken = jwtAuthentication.createToken(customer.toJSON());

    tokenManagment.saveToken(customerId, customerToken);
  }

  sanitizeCustomer(customer) {
    delete customer.password;

    return customer;
  };

  async updateCustomer(customerId, data){
    await this.customerModel.update(
      { 
        _id: customerId,
      },
      {
        $set: data
      }
    );
  }
};  
