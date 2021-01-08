import React from "react";

function Card({ size }) {
	const arr = [1, 2, 3, 4, 5];
	return (
		<div className="card col-5  m-auto mb-4">
			<div className="card-header">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore
				accusamus tenetur recusandae saepe modi, architecto delectus facere,
				vitae non rerum cum esse rem unde quibusdam odio dignissimos ex. Animi!
			</div>
			{arr.map((val) => (
				<li
					key={val}
					className="list-group-item mt-2 mb-2 ml-3 mr-3 rounded shadow bg-light"
				>
					<span>
						<i className="fa fa-star"></i>
					</span>
					{"   "}
					BENEFIT {val}
				</li>
			))}
			<button
				className=" rounded-3 btn btn-block col-4 mt-2 mb-2 mr-auto ml-auto pt-2 pb-2
             btn-dark"
			>
				Register
			</button>
		</div>
	);
}

export default Card;
