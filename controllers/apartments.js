import moment from "moment";
import Apartments from "../models/apartments";

const days = [
  "Today",
  "Tomorrow",
  moment()
    .add(2, "days")
    .format("ddd, MMM D")
];

const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

export const index = (req, res, next) => {
  // Find all apartments and return json response
  Apartments.find()
    .lean()
    .exec((err, apartments) =>
      res.json(
        // Iterate through each apartment
        {
          apartments: apartments.map(apartment => ({
            ...apartment,
            days,
            times
          }))
        }
      )
    );
};
