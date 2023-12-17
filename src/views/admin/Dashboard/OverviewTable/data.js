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
    },
    {
      key: "subjectsCount",
      title: "SL bài giảng",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
    },
    {
      key: "completedSbj",
      title: "Bài giảng đã hoàn thành",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
    },
    {
      key: "exercises",
      title: "SL bài tập",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
    },
    {
      key: "completedExercise",
      title: "Bài tập đã hoàn thành",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
    }
  ];