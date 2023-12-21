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

export const SubmissionColumns = [
    {
      key: "idx",
      title: "STT",
      type: FIELD_TYPE.INTEGER,
      sortable: false,
      width: "35px"
    },
    {
      key: "timeSubmitted",
      title: "Thời gian",
      type: FIELD_TYPE.DATE,
      sortable: false,
    },
    {
      key: "status",
      title: "Trạng thái",
      type: FIELD_TYPE.STRING,
      sortable: false,
    },
    {
      key: "exercise.questionName",
      title: "Bài tập",
      type: FIELD_TYPE.STRING,
      sortable: false,
      maxWidth: 100
    },
    {
      key: "user.username",
      title: "Học viên",
      type: FIELD_TYPE.STRING,
      sortable: false,
    },
    {
      key: "solution",
      title: "Lời giải",
      type: FIELD_TYPE.STRING,
      sortable: false,
      maxWidth: '200px'
    },
  ];