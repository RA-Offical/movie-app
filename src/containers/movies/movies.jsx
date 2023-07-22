import { Movie } from "../../components";
import "./movies.css";

const Movies = () => {
	return (
		<section className="movies-cont">
			<div className="max-fw mg-center md-padx-1x md-pady-2x grid justify-btw movies">
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
			</div>
		</section>
	);
};

export default Movies;
