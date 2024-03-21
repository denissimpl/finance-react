import { GridColDef } from '@mui/x-data-grid';
const columns: GridColDef[] = [
    {
        field: "id",
    },
    {
      field: 'name',
      headerName: 'Категория',
      width: 150
    },
    {
      field: 'amount',
      headerName: 'Цена',
      width: 150
    },
    {
      field: 'date',
      headerName: 'Дата',
      width: 110
    },
  ];

  export default columns