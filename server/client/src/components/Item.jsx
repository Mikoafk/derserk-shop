import React, { useState } from "react";

export default function Item({ data }) {
	const [preview, setPreview] = useState(data.images[0]);

	const handleHoverPreview = () => {
		setPreview(data.images[1]);
	};

	const handleLeavePreview = () => {
		setPreview(data.images[0]);
	};

	return (
		<div className="card">
			<div
				className="card-image-bg"
				style={{
					backgroundImage: `url(${preview})`,
					backgroundPosition: "center",
				}}
			>
				<img
					className="card-image"
					alt="preview"
					src={preview}
					style={{ position: "absolute", backdropFilter: "blur(10px)" }}
					onMouseOver={handleHoverPreview}
					onMouseLeave={handleLeavePreview}
				/>
			</div>
			<div className="card-content">
				<h5 className="card-name">{data.name}</h5>
				<p className="card-price">$ {data.price.toLocaleString()}</p>
			</div>
		</div>
	);
}
