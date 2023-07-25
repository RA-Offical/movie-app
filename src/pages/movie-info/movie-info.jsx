import "./movie-info.css";

const MovieInfo = () => {
	return (
		<div>
			<section className="max-fw mg-center md-padx-1x pady-app-top movie-info">
				<h2 className="movie__name">Justice League</h2>
				<p className="movie__launch-date">2023-02-12</p>

				<div className="grid justify-btw  movie-detail-card">
					<p className="movie__desc">
						Justice League is a 2017 American superhero film based
						on the DC Comics superhero team of the same name.
						Produced by Warner Bros. Pictures, DC Films, RatPac-Dune
						Entertainment, Atlas Entertainment, and Cruel and
						Unusual Films and distributed by Warner Bros. Pictures,
						it is the fifth installment in the DC Extended Universe
						(DCEU). Directed by Zack Snyder and written by Chris
						Terrio and Joss Whedon, the film features an ensemble
						cast including Ben Affleck, Henry Cavill, Amy Adams, Gal
						Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Jeremy
						Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In
						the film, following the events of Batman v Superman:
						Dawn of Justice (2016) Batman and Wonder Woman recruit
						The Flash, Aquaman, and Cyborg after the death of
						Superman to save the world from the catastrophic threat
						of Steppenwolf and his army of Parademons.
					</p>

					<img
						src="../images/5.jpg"
						alt=""
						className="round-6 movie__img"
					/>
				</div>

				<p className="movie__rating">Movie Rating: 79</p>
				<a href="#" className="movie__link">
					Get Movie
				</a>

				<button className="btn btn--primary">Back</button>
			</section>
		</div>
	);
};

export default MovieInfo;
