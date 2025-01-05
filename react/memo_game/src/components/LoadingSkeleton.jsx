const LoadingSkeleton = () => {
	const skeletons = Array(12).fill(null);

	return (
		<div className="skeleton-container">
		  {skeletons.map((_, i) => (
			<div key={i} className="skeleton-card">
			  <div className="skeleton-content"></div>
			</div>
		  ))}
		</div>
	);
}

export default LoadingSkeleton;