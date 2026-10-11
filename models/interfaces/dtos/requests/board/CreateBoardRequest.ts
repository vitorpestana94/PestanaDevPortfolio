export default interface CreateBoardRequest {
   name: string;
   columnsNames: {
      columnNameOne: string;
      columnNameTwo: string;
      columnNameThree: string;
      columnNameFour: string;
      columnNameFive: string;
   };
   boardTask: {
      taskName: string;
      taskType: string;
      taskDescription: string;
      deadline?: string | null;
   };
}
