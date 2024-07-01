import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Item from "./Item";

export default function Section({ name, description, id, icon }) {
	const [backendData, setBackendData] = useState([]);

	useEffect(() => {
		fetch("/api/" + id)
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, [id]);

	return (
		<div className="container">
			<div>
				<h1>
					<i class={icon} style={{ color: "red" }}></i> {name}{" "}
					<span style={{ color: "#aaa", fontSize: "1rem" }}>- {description}</span>
				</h1>
				<hr style={{ margin: "2.5rem 0", backgroundColor: "rgba(0, 0, 0, 0.05)" }} />
			</div>
			{backendData.length < 1 ? (
				<Loader />
			) : (
				<div className="list">
					{backendData?.map((shirt, i) => (
						<Item data={shirt} />
					))}
				</div>
			)}
			<center>
				<a className="view-all" href={`/${id}`}>
					Ver todo
				</a>
			</center>
		</div>
	);
}
