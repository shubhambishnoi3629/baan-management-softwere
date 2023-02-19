import { BaanService } from "./baanService.js";
import { BhaaiService } from "./bhaaiService.js";
import { CustomerService } from "./customerService.js";
import { NimtaService } from "./nimtaService.js";
import { PariwarRolesService } from "./pariwarRoleservice.js";
import { PariwarService } from "./pariwarService.js";
import { RelativesService } from "./relativesService.js";
import { BaanModel } from "../models/baanModel.js";
import { BhaaiModel } from "../models/bhaaiModel.js";
import { CustomerModel } from "../models/customerModel.js";
import { NimtaModel } from "../models/nimtaModel.js";
import { PariwarModel } from "../models/pariwarModel.js";
import { RelativesModel } from "../models/relativesModel.js";
import { PariwarRolesModel } from "../models/pariwarRolesModel.js";


export const baanService = new BaanService(BaanModel);
export const bhaaiService = new BhaaiService(BhaaiModel);
export const customerService = new CustomerService(CustomerModel);
export const nimtaService = new NimtaService(NimtaModel);
export const pariwarRolesService = new PariwarRolesService(PariwarRolesModel);
export const pariwarService = new PariwarService(PariwarModel);
export const relativesService = new RelativesService(RelativesModel);
