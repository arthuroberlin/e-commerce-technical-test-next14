import React, { ReactNode } from "react";
import type { Metadata } from "next";

interface CartLayoutProps {
	children: ReactNode;
}

/* ---//--- Metadata ---//--- */
export const metadata: Metadata = {
	title: "e-commerce-technical-test - Cart",
	description: "Page panier de l'application -nomdelapp-.",
};

/* ---//--- Layout ---//--- */

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {
	return <>{children}</>;
};

export default CartLayout;
