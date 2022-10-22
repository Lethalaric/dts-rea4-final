import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		const authenticated = localStorage.getItem("access_token");
		console.log('authenticated', authenticated)

		// if (authenticated && window.location.pathname != "/") {
		// 	window.location.href = "/";
		// } else {
		// 	if (window.location.pathname != "/signup")
		// 		window.location.href = "/signup";
		// }

		if (user || authenticated) {
			console.log("user if", user);

			if (window.location.pathname !== "/") {
				window.location.replace("/");
			}
		} else {
			console.log("user else", user);

			if (window.location.pathname === "/") {
				window.location.replace("signup");
			}
		}

	}, [user]);

	const onSetUser = (token) => {
		localStorage.setItem("access_token", token);
		setUser(token);
	}

	// return <>{children}</>;

	return (
		<AuthContext.Provider value={{ user, setUser: onSetUser }}>
			{children}
		</AuthContext.Provider>
	);
}