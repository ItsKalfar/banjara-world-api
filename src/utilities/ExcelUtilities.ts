import moment from "moment";
import Excel from "exceljs";
import { map } from "lodash";

interface Configuration {
  header: string;
  key: string;
  type: string;
}

interface RowData {
  [key: string]: any;
}

export const generateExcel = async (
  name: string,
  path: string,
  configurations: Configuration[],
  rowData: RowData[]
): Promise<{ path: string; name: string }> => {
  const fileName = `${name.replace(/ /g, "_")}-${moment().format(
    "YYYY_MM_DD_hh_mm_ss"
  )}.xlsx`;
  const filePath = `${path}${fileName}`;
  const options = {
    filename: filePath,
    useStyles: true,
    useSharedStrings: true,
  };

  const workbook = new Excel.stream.xlsx.WorkbookWriter(options);
  const sheet1 = workbook.addWorksheet(name.replace(/ /g, "_"));

  let i: number = 1;
  let j: number = 2;

  sheet1.addRow({});
  map(configurations, function (column) {
    sheet1.getRow(1).getCell(i).value = column.header;
    i++;
  });

  map(rowData, function (row) {
    sheet1.addRow({});
    i = 1;
    map(configurations, function (column: any) {
      switch (column.type) {
        case "number":
          if (
            typeof row[column.key] === "number" ||
            parseInt(row[column.key]) + "" === row[column.key]
          ) {
            sheet1.getRow(j).getCell(i).value = parseInt(row[column.key]);
          } else {
            sheet1.getRow(j).getCell(i).value = row[column.key];
          }
          break;
        case "double":
          if (row[column.key] !== undefined && row[column.key] != null) {
            sheet1.getRow(j).getCell(i).value = parseFloat(row[column.key]);
          } else {
            sheet1.getRow(j).getCell(i).value = row[column.key];
          }
          break;
        case "date":
          if (row[column.key] !== undefined && row[column.key] != null) {
            sheet1.getRow(j).getCell(i).value = moment(row[column.key])
              .utc()
              .format("DD-MM-YYYY");
          } else {
            sheet1.getRow(j).getCell(i).value = row[column.key];
          }
          break;
        case "timestamp":
          if (row[column.key] !== undefined && row[column.key] != null) {
            sheet1.getRow(j).getCell(i).value = moment(row[column.key])
              .utc()
              .format("DD-MM-YYYY HH:mm:ss");
          } else {
            sheet1.getRow(j).getCell(i).value = row[column.key];
          }
          break;
        default:
          sheet1.getRow(j).getCell(i).value = row[column.key];
      }
      i++;
    });
    sheet1.getRow(j).commit();
    j++;
  });

  sheet1.commit();
  await workbook.commit();

  return {
    path: filePath,
    name: fileName,
  };
};
