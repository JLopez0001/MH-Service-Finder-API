import axios from "axios";
import { promises as fsPromises } from "fs";

axios
  .get(
    "https://data.cityofnewyork.us/resource/8nqg-ia7v.json?$query=SELECT%20name_1%2C%20name_2%2C%20street_1%2C%20street_2%2C%20city%2C%20zip%2C%20phone%2C%20website%2C%20latitude%2C%20longitude%2C%20flag_saf%2C%20flag_mhf%2C%20flag_mc%2C%20flag_md%2C%20flag_np_ss%2C%20flag_pi%2C%20flag_gl%2C%20vet%2C%20flag_pw%2C%20flag_hv%2C%20flag_dv%2C%20flag_chld%2C%20flag_yad%2C%20flag_adlt%2C%20flag_snr%2C%20flag_si%2C%20filter_military%2C%20filter_inpatient_svc%2C%20filter_residential_pgm%20ORDER%20BY%20filter_military%20ASC"
  )
  .then((response) => {
    const data = response.data;
    console.log(data); // Logging the fetched data
    return fsPromises.writeFile("./originalData.json", JSON.stringify(data));
  })
  .then(() => {
    console.log("Data written to file successfully.");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
