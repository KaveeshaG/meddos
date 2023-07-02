import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleViewButtonClick = (id) => {
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* {isSelectedRow ? (
              <Link
                to={`/students/pdf/${params.row.id}`}>
                <PDFDownloadLink
                  document={<PdfFile selectedRowId={selectedRowId} />}
                  fileName="report"
                >
                  {({ loading }) => (
                    <button className="viewButton" disabled={loading}>
                      {loading ? "Loading..." : "Download"}
                    </button>
                  )}
                </PDFDownloadLink>
              </Link>
            ) 
            : (
              <Link
                to={`/students/pdf/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                <button className="viewButton"
                  onClick={() => handleViewButtonClick(params.row.id)}
                >View</button>
              </Link>
            )
            } */}
            <Link
              to={`/students/pdf/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <button className="viewButton"
                onClick={() => handleViewButtonClick(params.row.id)}
              >View</button>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Students Records
        {/* <Link to="/students/new" className="link">
            Add New
          </Link> */}
      </div>
      <Box sx={{ height: 800, width: '100%' }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20]}
          rowsPerPageOptions={[20]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default Datatable