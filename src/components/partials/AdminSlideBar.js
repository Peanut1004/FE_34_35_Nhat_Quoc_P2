import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AdminSlideBar() {
  const { t } = useTranslation("common");

  const ADMIN_SLIDE_BAR = [
    { to: "/admin/usersManagement", title: t("admin.usersManagement") },
    { to: "/admin/moviesManagement", title: t("admin.moviesManagement") },
    { to: "/admin/revenueManagement", title: t("admin.revenueManagement") },
    { to: "/admin/ticketsManagement", title: t("admin.ticketsManagement") },
  ];

  return (
    <div className="admin-slide-bar">
      <ul>
        {ADMIN_SLIDE_BAR.map((e, i) => (
          <li key={i}>
            <Link to={e.to}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
