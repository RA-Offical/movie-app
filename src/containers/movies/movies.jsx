import { Movie } from "../../components";
import "./movies.css";

const Movies = () => {
	return (
		<section className="movies-cont">
			<div className="max-fw mg-center md-padx-1x md-pady-2x grid movies">
				<Movie type={"add"} />
				<Movie type={"add"} />
				<Movie type={"add"} />
				<Movie type={"add"} />
				<Movie type={"add"} />
				<Movie type={"add"} />
				<Movie type={"add"} />
			</div>
		</section>
	);
};

export default Movies;
