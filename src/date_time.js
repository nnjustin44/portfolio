import * as moment from "moment";

export function dateTime() {
  return moment().format("dddd MMMM  Mo YYYY h:mm a");
}
