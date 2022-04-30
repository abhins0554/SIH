// @material-ui/icons
import { Dashboard, BrandingWatermark, Email, MeetingRoom, LibraryBooks, Person,Event,Message } from "@material-ui/icons";

import DashboardPage from "views/Dashboard/Dashboard.js";
import UserManagement from "views/UserManagement/index.js";
import NewsManagement from "views/UserManagement/index.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user_management",
    name: "User Management",
    icon: BrandingWatermark,
    component: UserManagement,
    layout: "/admin",
  },
  {
    path: "/disaster_management",
    name: "Disaster Management",
    icon: BrandingWatermark,
    component: NewsManagement,
    layout: "/admin",
  },
  {
    path: "/news_management",
    name: "News Management",
    icon: Event,
    component: NewsManagement,
    layout: "/admin",
  },
];

export default dashboardRoutes;
