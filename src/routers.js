import React from "react";
// import AdminMovieAddEdit from "./components/admin/AdminMovieAddEdit";
// import AdminMoviesManagement from "./components/admin/AdminMoviesManagement";
// import AdminRevenueManagement from "./components/admin/AdminRevenueManagement";
// import AdminTicketsManagement from "./components/admin/AdminTicketsManagement";
// import AdminUserAddEdit from "./components/admin/AdminUserAddEdit";
// import AdminUsersManagement from "./components/admin/AdminUsersManagement";
// import Register from "./components/pages/Register";
import MovieListPage from "./components/pages/MovieList";
import MovieDetailPage from "./components/pages/MovieDetails";
import ChooseTickets from "./components/pages/ChooseTickets";
import Home from "./components/pages/Home";

const routers = [
  {
    path: "/movie-list",
    exact: true,
    main: () => <MovieListPage />,
  },
  {
    path: "/buy-ticket",
    exact: true,
    main: () => <MovieDetailPage />,
  },
  {
    path: "/movie-details",
    exact: true,
    main: () => <MovieDetailPage />,
  },
  {
    path: "/choose-ticket",
    exact: true,
    main: () => <ChooseTickets />,
  },
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  }

  // ,
  // {
  //   path: "/register",
  //   exact: true,
  //   main: () => <Register />,
  // },
  // {
  //   path: "/admin/moviesManagement",
  //   exact: true,
  //   main: () => <AdminMoviesManagement />,
  // },
  // {
  //   path: "/admin/moviesManagement/edit/:movieId",
  //   exact: true,
  //   main: () => <AdminMovieAddEdit />,
  // },
  // {
  //   path: "/admin/moviesManagement/add",
  //   exact: true,
  //   main: () => <AdminMovieAddEdit />,
  // },
  // {
  //   path: "/admin/revenueManagement",
  //   exact: true,
  //   main: () => <AdminRevenueManagement />,
  // },
  // {
  //   path: "/admin/ticketsManagement",
  //   exact: true,
  //   main: () => <AdminTicketsManagement />,
  // },
  // {
  //   path: "/admin/usersManagement",
  //   exact: true,
  //   main: () => <AdminUsersManagement />,
  // },
  // {
  //   path: "/admin/usersManagement/edit/:userId",
  //   exact: true,
  //   main: () => <AdminUserAddEdit />,
  // },
  // {
  //   path: "/admin/usersManagement/add",
  //   exact: true,
  //   main: () => <AdminUserAddEdit />,
  // },
];

export default routers;
