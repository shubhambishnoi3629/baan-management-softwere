export class SecurityService {
  constructor() { };

  checkUserInCustomer(customer, pariwarId, roles = []) {
    const foundRole =  customer.pariwarRoles?.find((pariwarRole) =>  {
        return pariwarId === pariwarRole.pariwarId ;
    });
 
    if (!foundRole || !(roles.length === 0 || roles.includes(foundRole.role))) {
      throw {
        type: "NOT_AUTHORIZED",
        message: "You do not have access to this enitity",
      }
    }
  }
}
   