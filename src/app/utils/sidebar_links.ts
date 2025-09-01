// constants/sidebarTabs.ts
import {
    FaHome,
    FaUserPlus,
    FaCheckCircle,
    FaMoneyCheckAlt,
    FaUsers,
    FaBook,
    FaListUl,
    FaUserCircle,
  } from "react-icons/fa";
  
  export const SIDEBAR_TABS = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: FaHome,
      roles: ["admin", "teacher", "student"],
    },
    {
      name: "Manage Students",
      href: "/dashboard/students",
      icon: FaUserPlus,
      roles: ["admin", "teacher"],
    },
    {
      name: "Update Attendance",
      href: "/dashboard/update-attendance",
      icon: FaCheckCircle,
      roles: ["teacher"],
    },
    {
      name: "Check Student Fees",
      href: "/dashboard/check-fees",
      icon: FaMoneyCheckAlt,
      roles: ["teacher"],
    },
    {
      name: "My Attendance",
      href: "/dashboard/my-attendance",
      icon: FaCheckCircle,
      roles: ["student"],
    },
    {
      name: "My Fees",
      href: "/dashboard/my-fees",
      icon: FaMoneyCheckAlt,
      roles: ["student"],
    },
    {
      name: "Manage Teachers",
      href: "/dashboard/teachers",
      icon: FaUsers,
      roles: ["admin"],
    },
  
    {
      name: "Classes",
      href: "/dashboard/classes",
      icon: FaListUl,
      roles: ["admin"],
    },
    {
      name: "Subjects",
      href: "/dashboard/subjects",
      icon: FaBook,
      roles: ["admin"],
    },
    {
      name: "Fee Reports",
      href: "/dashboard/fee-reports",
      icon: FaMoneyCheckAlt,
      roles: ["admin"],
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: FaUserCircle,
      roles: ["admin", "teacher", "student"],
    },
  ];
  