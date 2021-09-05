import React from "react";
import PropTypes from "prop-types";
import s from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={s.notificationText}>{message}</p>
);

Notification.protTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
