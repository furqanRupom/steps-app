/* navlinks generator */






/* dashboard generate  */

export const DashboardGenerator = (role: string) => {
    let Navlinks = [];
    switch (role) {
        case 'user':
            Navlinks = [
                {
                    path: "/user",
                    name: "user dashboard"
                },
                {
                    path: "/goals",
                    name: "My Goals"
                },
                {
                    path: "/tasks",
                    name: "My Tasks"
                }
                ,
                {
                    path: "/history",
                    name: "My taks and goals History"
                }
            ]

            break;
        case 'admin':
            Navlinks = [
                {
                    path: "/admin",
                    name: "admin dashboard"
                },
                {
                    path: "/users",
                    name: "All Users"
                },
                {
                    path: "/golas",
                    name: "All Goals"
                }
                ,
                {
                    path: "/tasks",
                    name: "All Tasks"
                }
                ,
                {
                    path: "/history",
                    name: "My taks and goals History"
                }
            ]
            return Navlinks;
    }
}


export const NavlinksGenerator = (role: string) => {
    let Navlinks = [];
    switch (role) {
        case 'user':
            Navlinks = [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/dashboard",
                    name: "dashboard"
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
            return Navlinks;
        case 'admin':
            Navlinks = [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/dashboard",
                    name: "dashboard"
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
            return Navlinks;
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
                {
                    path: "/login",
                    name: "Login"
                },
            ]

            return Navlinks;


    }
}