import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		const authenticated = localStorage.getItem("access_token");
		console.log('authenticated', authenticated)

		if (user || authenticated) {
			console.log("user if", user);

			if (window.location.pathname === "/signin" || window.location.pathname === "/signup") {
				window.location.replace("/sudahlogin");
			}
		} else {
			console.log("user else", user);

			if (window.location.pathname === "/sudahlogin") {
				window.location.replace("/signin");
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