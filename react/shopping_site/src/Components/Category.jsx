import { Link } from "react-router-dom";

const Category = ({
	link,
	name,
	image,
}) => {
	return (
		<div className="category-card">
			<img src={image} alt={name} />
			<div className="category-content">
				<h2>{name}</h2>
				<Link to={link}>
					<button>Explore</button>
				</Link>
			</div>
		</div>
	);
};

export default Category;