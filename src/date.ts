import {config} from "~/config";

export function reformatDate(dateString: string): string {
  const date = new Date(dateString);
  const str = config.date_format.replace('YYYY', date.getFullYear().toString())
    .replace('MM', (date.getMonth()+1).toString())
    .replace('DD', date.getDate().toString());
  return str;
}