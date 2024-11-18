import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const TopProducts = () => {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 1,
        width: "60%",
        margin: 13,
        mt: 5,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Top Products
      </Typography>
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Popularity</TableCell>
              <TableCell>Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>01</TableCell>
              <TableCell>Laproscopes</TableCell>
              <TableCell>
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "80%",
                      height: "100%",
                      background: "rgba(0, 149, 255, 1)",
 borderRadius: 5,
                    }}
                  ></Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    borderRadius: "12px",
                    color: "blue",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  45%
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>02</TableCell>
              <TableCell>Diagnostic Equipments</TableCell>
              <TableCell>
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "55%",
                      height: "100%",
                      background: "rgba(0, 224, 150, 1)",
 borderRadius: 5,
                    }}
                  ></Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "12px",
                    color: "green",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  29%
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>03</TableCell>
              <TableCell>Wheelchairs</TableCell>
              <TableCell>
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      background: "rgba(197, 168, 255, 1)",
                      borderRadius: 5,
                    }}
                  ></Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "rgba(128, 0, 128, 0.1)",
                    borderRadius: "12px",
                    color: "purple",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  18%
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>04</TableCell>
              <TableCell>BP Monitors</TableCell>
              <TableCell>
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "40%",
                      height: "100%",
                      background: "rgba(255, 213, 164, 1)",
                      borderRadius: 5,
                    }}
                  ></Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "rgba(255, 165, 0, 0.1)",
                    borderRadius: "12px",
                    color: "orange",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  25%
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopProducts;
