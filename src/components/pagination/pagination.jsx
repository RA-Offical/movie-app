import "./pagination.css";

const Pagination = () => {
	return (
		<div className="max-fw mg-center pagination-wrapper">
			<section className="flex mg-center round-6 pagination">
				<button className="no-after btn pagination__btn">Prev</button>
				<div className="flex pagination-btn-group">
					<button className="btn pagination__btn ">1</button>
					<button className="btn pagination__btn  active">2</button>
					<button className="btn pagination__btn">3</button>
					<button className="btn pagination__btn">4</button>
					<button className="btn pagination__btn">5</button>
					<button className="btn pagination__btn">6</button>
					<button className="btn pagination__btn">7</button>
					<button className="btn pagination__btn">8</button>
					<button className="btn pagination__btn">9</button>
				</div>
				<button className="btn pagination__btn">Next</button>
			</section>
		</div>
	);
};

export default Pagination;
