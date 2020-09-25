import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_TICKETS_MANAGEMENT } from "../../constants/adminManagement";
import { getTickets } from "../../redux/slice/adminTicketsManagementSlice";
import AdminEdit from "./AdminEdit";

export default function AdminTicketsManagement() {
  const dispatch = useDispatch();

  const { tickets, loading, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="admin-tickets-management">
          <table>
            <thead>
              <tr>
                {ADMIN_TICKETS_MANAGEMENT.map((e, i) => (
                  <th key={i}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tickets.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.email}</td>
                  <td>{e.movieName}</td>
                  <td>{e.movieCinema}</td>
                  <td>{e.timeSet}</td>
                  <td>
                    <AdminEdit />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
