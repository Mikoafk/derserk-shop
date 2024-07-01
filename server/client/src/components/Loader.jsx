import React from "react";

export default function Loader() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
                color: "#aaaaaaa"
			}}
		>
			<i class="fa-solid fa-spinner fa-spin" style={{ marginRight: "0.5rem" }}></i> Cargando...
		</div>
	);
}
