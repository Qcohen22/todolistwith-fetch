import React from "react";



import { Home } from "./views/home.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/


	return (
		<div>	
			<Home />
		</div>
	);
};

export default injectContext(Layout);

