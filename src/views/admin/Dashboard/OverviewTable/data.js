export const FIELD_TYPE = {
    STRING: "STRING",
    EMAIL: "EMAIL",
    INTEGER: "INTEGER",
    BOOLEAN: "BOOLEAN",
    FLOAT: "FLOAT",
    DATE: "DATE",
    DATETIME: "DATETIME",
    CUSTOMDATETIME: "CUSTOMDATETIME",
    IMAGE: "IMAGE",
    FILE: "FILE",
    ARRAY: "ARRAY"
  };

export const OverviewColumns = [
    {
      key: "idx",
      title: "No",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
      width: "35px"
    },
    {
      key: "main_image[0].url",
      title: "Image",
      type: FIELD_TYPE.IMAGE,
      sortable: false,
    },
    {
      key: "name",
      title: "Name",
      type: FIELD_TYPE.STRING,
      sortable: true,
      width: "30%",
    },
    {
      key: "description",
      title: "Description",
      type: FIELD_TYPE.STRING,
      sortable: true,
      width: "30%",
      maxWidth: 100
    },
    {
      key: "inventory",
      title: "Inventory",
      type: FIELD_TYPE.ARRAY,
      subkey: 'qty',
      sortable: false,
    }
  ];