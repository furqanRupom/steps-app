/* navlinks generator */

import { UserRole } from "@prisma/client";
import { JSX } from "react";
import { FaHistory, FaTasks } from "react-icons/fa";
import { FcSerialTasks } from "react-icons/fc";
import { FiBarChart, FiUser, FiUsers } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import { MdReport } from "react-icons/md";






/* dashboard generate  */

export const DashboardGenerator = (role: UserRole) => {
    let Navlinks: { path: string; name: string; icon: JSX.Element; }[] = [];
    switch (role) {
        case UserRole.USER:
            Navlinks = [
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    icon: <FiUser />
                },
                {
                    path: "/goals",
                    name: "My Goals",
                    icon: <FiBarChart />
                },
                {
                    path: "/tasks",
                    name: "My Tasks",
                    icon: <FaTasks/>
                },
                {
                    path: "/history",
                    name: "My taks and goals History",
                    icon: <FaHistory />
                }
            ];
            break;
        case UserRole.ADMIN:
            Navlinks = [
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    icon: <GrUserAdmin />
                },
                {
                    path: "/dashboard/admin/users",
                    name: "Manage users",
                    icon: <FiUsers />
                },
                {
                    path: "/dashboard/admin/goals",
                    name: "Manage goals",
                    icon: <FiBarChart />
                },
                {
                    path: "/dashboard/admin/tasks",
                    name: "Manage Tasks",
                    icon: <FaTasks />
                },
                {
                    path: "/dashboard/admin/history",
                    name: "Tasks and goals history",
                    icon: <FaHistory />
                },
                {
                    path: "/reports",
                    name: "Reports ",
                    icon: <MdReport />
                }
            ];
            break;
        default:
            // Handle other roles or provide a default behavior
            break;
    }

    return Navlinks;
};



export const NavlinksGenerator = (role: UserRole | "") => {
    let Navlinks: { path: string; name: string; }[] = [];
    switch (role) {
        case UserRole.USER:
            Navlinks = [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/about",
                    name: "About"
                },
                {
                    path: "/contact",
                    name: "Contact"
                },
                {
                    path: "/feedback",
                    name: "Feedback"
                },
            ]
            break;
        case UserRole.ADMIN:
            Navlinks = [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/about",
                    name: "About"
                },
                {
                    path: "/contact",
                    name: "Contact"
                },
                {
                    path: "/feedback",
                    name: "Feedback"
                },
            ]
            break;
        case UserRole.SUPER_ADMIN:
            Navlinks = [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/about",
                    name: "About"
                },
                {
                    path: "/contact",
                    name: "Contact"
                },
                {
                    path: "/feedback",
                    name: "feedback"
                },
            ]
            break;
        default:
            Navlinks = [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/about",
                    name: "About"
                },
                {
                    path: "/contact",
                    name: "Contact"
                },
                {
                    path: "/feedback",
                    name: "feedback"
                },
            ]
            break;

        

    }
    return Navlinks;
}