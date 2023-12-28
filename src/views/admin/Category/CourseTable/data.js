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

export const CourseColumns = [
    {
      key: "idx",
      title: "STT",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
      width: "35px"
    },
    {
      key: "image",
      title: "Hình ảnh",
      type: FIELD_TYPE.IMAGE,
      sortable: false,
    },
    {
      key: "name",
      title: "Tên khóa học",
      type: FIELD_TYPE.STRING,
      sortable: true,
      width: "30%",
    },
    {
      key: "description",
      title: "Mô tả chung",
      type: FIELD_TYPE.STRING,
      sortable: true,
      width: "30%",
      maxWidth: 100
    }
  ];