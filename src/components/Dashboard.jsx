import React from "react";
import "./Dashboard.css";
import Transactions from "./Transactions";
import TopProducts from "./TopProducts";
import AnalyticsChart from "./AnalyticsChart";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SellIcon from '@mui/icons-material/Sell';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DescriptionIcon from '@mui/icons-material/Description';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />

      <Grid container>
        <Grid size={2}>
          <aside className="sidebar">
            <nav className="menu">
              <a href="#" className="menu-item active">
                <CookieOutlinedIcon />
                Home
              </a>
              <a href="#" className="menu-item">
                <EqualizerOutlinedIcon /> Leaderboard
              </a>
              <a href="#" className="menu-item">
                <ShoppingCartOutlinedIcon />
                Orders
              </a>
              <a href="#" className="menu-item">
                <LocalMallOutlinedIcon />
                Products
              </a>
              <a href="#" className="menu-item">
                <TrendingUpOutlinedIcon />
                Sales Report
              </a>
              <a href="#" className="menu-item">
                <TextsmsOutlinedIcon /> Messages
              </a>
              <a href="#" className="menu-item">
                <SettingsOutlinedIcon />
                Settings
              </a>
              <a href="#" className="menu-item">
                <ExitToAppOutlinedIcon />
                Sign Out
              </a>
            </nav>
          </aside>
        </Grid>
        <Grid size={10}>
          <Grid container>
            <Grid size={8}>
              <div className="order-summary">
                <div className="title">
                  <h4>Todays Order Summary</h4>
                  <p className="today-date">07-Nov-2024<CalendarTodayOutlinedIcon/><button className="download"><FileDownloadOutlinedIcon/>Download</button></p>
                </div>
                <div className="summary-items" >
                <div className="summary-card total-orders">
                <p><AssessmentIcon style={{border:"1px solid #f06083",padding:5,background:"#f06083",fill:"white",borderRadius:"50%"}}/></p>
                  300 <p>Total Orders</p>
                  <span
                    style={{ fontSize: 10, color: " rgba(64, 121, 237, 1)" }}
                  >
                    +8% from yesturday
                  </span>
                </div>
                <div className="summary-card approval-pending">
                <p><DescriptionIcon style={{border:"1px solid orange",padding:5,background:"orange",fill:"white",borderRadius:"50%"}}/></p>

                  50 <p>Approval Pending</p>
                  <span
                    style={{ fontSize: 10, color: " rgba(64, 121, 237, 1)" }}
                  >
                    +5% from yesturday
                  </span>
                </div>
                <div className="summary-card total-transactions">
                    <p><SellIcon style={{border:"1px solid green",padding:5,background:"green",fill:"white",borderRadius:"50%"}}/></p>
                  250 <p>Total Transactions</p>
                  <span
                    style={{ fontSize: 10, color: " rgba(64, 121, 237, 1)" }}
                  >
                    +1,2% from yesturday
                  </span>
                </div>
                <div className="summary-card requests-received">
                    <p ><PersonAddAlt1Icon style={{border:"1px solid #bc6ad6",padding:5,background:"#bc6ad6",fill:"white",borderRadius:"50%"}}/></p>
                  20 <p>Requests Received</p>
                  <span
                    style={{ fontSize: 10, color: " rgba(64, 121, 237, 1)" }}
                  >
                    +0,5% from yesturday
                  </span>
                </div>
                </div>
              </div>

              <div className="analytics">
                <h4>Analytics</h4>
                <AnalyticsChart />
              </div>
            </Grid>
            <Grid size={4}>
              {" "}
              <div className="right-section">
                <Transactions />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={7}>
              <TopProducts />
            </Grid>
            <Grid size={5}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginTop="40px"
                padding={2}
              >
                {/* Main Container */}
                <Grid container spacing={2} alignItems="center">
                  {/* Credit Card */}
                  <Grid item xs={12} sm={8}>
                    <Card
                      sx={{
                        background:
                          "linear-gradient(180deg, #197BBD 0%, #3391D0 100%)",
                        color: "#fff",
                        borderRadius: "16px",
                        padding: 2,
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Axis Bank
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          Platinum Card
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            letterSpacing: "2px",
                            fontWeight: "bold",
                            margin: "16px 0",
                          }}
                        >
                          5789 **** **** 2847
                        </Typography>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="body2">Card holder</Typography>
                            <Typography variant="subtitle1">
                              Kaveri Hospitals
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">Expire date</Typography>
                            <Typography variant="subtitle1">06/24</Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Balance Details */}
                  <Grid item xs={12} sm={4}>
                    <Card
                      sx={{ border: "1px solid #ddd", borderRadius: "16px" }}
                    >
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Balance Details
                        </Typography>
                        <Box mb={2}>
                          <Typography variant="subtitle1" color="primary">
                            Rs. 10,00,000
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            Current balance
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" color="green">
                            Rs. 2,00,000
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            Today's spent
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Payment Limit */}
                  <Grid item xs={12} size={7}>
                    <Box display="flex">
                      <LinearProgress
                        variant="determinate"
                        value={20}
                        sx={{
                          width: "100%",
                          height: 8,
                          borderRadius: "4px",
                          backgroundColor: "#f0f0f0",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#007AFF",
                          },
                        }}
                      />
                    </Box>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ display: "block", marginTop: 1, color: "#555" }}
                      >
                        Weekly payment limit
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ marginLeft: 2, fontWeight: "bold" }}
                      >
                        Rs. 5,00,000
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
