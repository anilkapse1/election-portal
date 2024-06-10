import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { AgGridReact } from "ag-grid-react";
import PreviewActions from "./preview-actions";


const GridList = (props: any) => {
  const gridApiRefList = useRef(null);
  const { list, searchMember } = props;

  // STATE DECLARATION
  const [rowData, setRowData] = useState([]);
  const [listColumnDef, setListColumnDef] = useState<any[]>([]);
  const [gridApiList, setGridApiList] = useState<any>(null);

  // DEFAULT
  const defaultColDefList = {
    sortable: true,
    resizable: false,
    filter: false,
    wrapText: true,
    autoHeight: true,
    cellStyle: { textTransform: "capitalize" },
    flex: 1,
  };

  // GRID OPTION
  const gridOptionsList = {
    getRowHeight: () => 45,
};

  // ON GRID
  const onListGridReady = (params: any) => {
    gridApiRefList.current = params.api;
    setGridApiList(params.api);
  };

  // INITIAL LOAD THE DATA ONCE GRID READY
  useEffect(() => {
    if (gridApiRefList.current) {
      listColumnDefs();
      setRowData(list);
    }
  }, [gridApiRefList, list]);

  //DEFINE COLUMN DEFS FOR LIST
  const listColumnDefs = () => {
    const col = [
      //   {
      //     field: "isElected",
      //     wrapText: true,
      //     autoHeight: true,
      //   },
      {
        field: "name",
        width:300,
        valueGetter: (params: any) => `${params.data.name} ${params.data.middle_name} ${params.data.surname}`,
      },
      //   {
      //     field: "role",
      //     headerName: "Elected role",
      //     cellRenderer: (param: any) => {
      //       if (param.data.isElected) {
      //         return param.data.role;
      //       } else {
      //         return false;
      //       }
      //     },
      //   },
      {
        field: "gender",
      },
      {
        field: "area",
      },
      {
        field: "dob",
        headerName: "DOB",
      },
      {
        field:"member_since",
        headerName: "member since",
      },
      {
        field: "contact",
      },
      {
        field: "",
        headerName: "participants form",
        cellRenderer: (param: any) => {
          return <PreviewActions params={param} />;
        },
      },
    ];

    setListColumnDef(col);
  };

  // search member
  useEffect(() => {
    if (gridApiList) {
      gridApiList.setQuickFilter(searchMember);
    }
  }, [searchMember]);

  return (
    <div>
      <Box className="ag-theme-alpine list-container" sx={{ paddingTop: 2 }}>
        {rowData && (
          <AgGridReact
            ref={gridApiRefList}
            rowData={rowData}
            columnDefs={listColumnDef}
            defaultColDef={defaultColDefList}
            gridOptions={gridOptionsList}
            onGridReady={onListGridReady}
            domLayout="autoHeight"
            overlayLoadingTemplate="loading data"
            overlayNoRowsTemplate="no record found"

          />
        )}
      </Box>
    </div>
  );
};

export default GridList;
