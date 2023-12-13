import { get } from "lodash";
import { ColumnInterface } from "../interfaces";
import { FIELD_TYPE } from "../lib/constants";

export default class Tools {
  static dateFormat(date, locale = "FR-FR") {
    try {
      if (!date) return null;
      let dateString = "";
      if (typeof date === "string") {
        dateString = date.replace(" ", "T");
      }

      try {
        let result = new Date(dateString);
        const formater = new Intl.DateTimeFormat(locale);
        return formater.format(result);
      } catch (error) {
        return new Date().toDateString();
      }
    } catch (error) {
      return date;
    }
  }

  static numberFormat(number) {
    if (!number) return 0;
    const formater = new Intl.NumberFormat();
    return formater.format(number); // "1,234,567,890"
  }

  static numberMoneyFormat(number) {
    if (!number) return 0;
    number = Math.round(number);
    const formater = new Intl.NumberFormat();
    return formater.format(number);
  }

  static customFormatDate(dates) {
    const date = new Date(dates);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    const response =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      "  " +
      strTime;
    return response;
  }

  static formatTableData(column, row) {
    let value = null;
    const { key } = column;
    const addSuffixPrefix = (value) => {
      if (typeof column.suffix !== "undefined") {
        value = value + " " + column.suffix;
      }
      if (typeof column.prefix !== "undefined") {
        value = column.prefix + " " + value;
      }
    };

    switch (column.type) {
      case FIELD_TYPE.STRING:
        value = get(row, key);
        if (typeof column.date !== "undefined" && column.date) {
          value = Tools.dateFormat(value);
        }
        break;
      case FIELD_TYPE.EMAIL:
        value = row[key];
        break;
      case FIELD_TYPE.INTEGER:
        if (typeof row[key] !== "undefined" && row["key"] !== null) {
          value = this.numberFormat(row[key]);
          addSuffixPrefix(value?.toString());
        }
        break;
      case FIELD_TYPE.FLOAT:
        if (typeof row[key] === "undefined" || row["key"] === null) {
          value = null;
          break;
        }
        value = this.numberFormat(Math.round(row[key] * 10) / 10);
        addSuffixPrefix(value?.toString());
        break;
      case FIELD_TYPE.BOOLEAN:
        value = row[key];
        break;
      case FIELD_TYPE.DATE:
        value = this.dateFormat(row[key]);

        break;
      case FIELD_TYPE.CUSTOMDATETIME:
        value = this.customFormatDate(row[key]);

        break;

      default:
        value = row[key];
    }
    return value;
  }
}
