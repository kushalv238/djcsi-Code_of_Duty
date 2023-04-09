import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome, faUsers, faFile, faChartLine, faBell, faCreditCard, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ListItem from './ListItem';

import logo from '../images/logo.png'

import "../stylesheets/sidebar.css";

const VerticalNavbar = (props) => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div id="sidebar">
			<div className="logo">
				<div className="logo-img">
					<img src={logo} alt="logo" />
				</div>
				<div className="logo-title">
					<p>HRestaurant</p>
				</div>
			</div>
			<div className="list-wrapper">
				<ul className="list">
					<ListItem title="Home" icon={faHome} link="/" className={`${props.page === 0 ? ' at-page' : ''}`} setPage={props.setPage} pageID={0} />
					<ListItem title="Employee" icon={faUsers} link="/employees" className={`${props.page === 1 ? ' at-page' : ''}`} setPage={props.setPage} pageID={1} />
					<ListItem title="Report" icon={faFile} link="/" className={`${props.page === 2 ? ' at-page' : ''}`} setPage={props.setPage} pageID={2} />
					<ListItem title="Recommend" icon={faChartLine} link="/" className={`${props.page === 3 ? ' at-page' : ''}`} setPage={props.setPage} pageID={3} />
					<ListItem title="Notification" icon={faBell} link="/" className={`${props.page === 4 ? ' at-page' : ''}`} setPage={props.setPage} pageID={4} />
					<ListItem title="Billing" icon={faCreditCard} link="/" className={`${props.page === 5 ? ' at-page' : ''}`} setPage={props.setPage} pageID={5} />
					<ListItem title="Settings" icon={faGear} link="/" className={`${props.page === 6 ? ' at-page' : ''}`} setPage={props.setPage} pageID={6} />
				</ul>
			</div>
			<div className="logout-button">
				<div className="logout-button-wrapper" onClick={handleLogout}>
					<FontAwesomeIcon icon={faRightFromBracket} />
					<p>Logout</p>
				</div>
			</div>
		</div>
	);
};

export default VerticalNavbar;
