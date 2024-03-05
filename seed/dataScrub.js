import services from "./serviceFinder.json" assert { type: "json" };
import { promises as fsPromises } from "fs";

let mentalHealthServices = services.map((item) => {
  const service = {};
  service.name = item.name_1;
  service.programName = item.name_2;
  service.street = item.street_1;
  service.room = item.street_2;
  service.city = item.city;
  service.zip = item.zip;
  service.phone = item.phone;
  service.website = item.website;
  service.militaryServices = item.filter_military;
  return service;
});

fsPromises.writeFile(
  "./servicesFinder.json",
  JSON.stringify(mentalHealthServices)
);
