import { BaanService } from "./baanService.js";
import { BhaaiService } from "./bhaaiService.js";
import { CustomerService } from "./customerService.js";
import { NimtaService } from "./nimtaService.js";
import { PariwarRolesService } from "./pariwarRoleservice.js";
import { PariwarService } from "./pariwarService.js";
import { RelativesService } from "./relativesService.js";

export const baanService = new BaanService();
export const bhaaiService = new BhaaiService();
export const customerService = new CustomerService();
export const nimtaService = new NimtaService();
export const pariwarRolesService = new PariwarRolesService();
export const pariwarService = new PariwarService();
export const relativesService = new RelativesService();
