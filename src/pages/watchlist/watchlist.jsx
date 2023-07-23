import { Movie } from "../../components";
import "./watchlist.css";

const Watchlist = () => {
	return (
		<div className="">
			<section className="max-fw mg-center   md-padx-1x pady-app-top pady-header-height grid movies watchlist">
				<Movie type={"delete"} />
				<Movie type={"delete"} />
				<Movie type={"delete"} />
				<Movie type={"delete"} />
				<Movie type={"delete"} />
				<Movie type={"delete"} />
			</section>
		</div>
	);
};

export default Watchlist;
