import "./hero.css";

const Hero = () => {
	return (
		<section className="hero-wrapper">
			<div className="max-fw mg-center md-padx-1x grid align-ic hero">
				<div className="pady-01x hero-content">
					<p className="hero__call-out">Help us find you the</p>
					<h1 className="hero__title">Perfect Movie</h1>
					<p className="hero__desc">
						Hustle through tons of movies of every category, giving
						you a lot of movies to choose from, or if you are
						confused watch one of our choosen here.
					</p>

					<button className="btn btn--primary hero__find--btn">
						Find Movie
					</button>
				</div>
				<div className="pady-01x hero-movie">
					<p className="hero-movie__call-out">You may like</p>
					<h2 className="hero-movie__name">Loading...</h2>
					<img
						src="./images/1.jpg"
						alt=""
						className="mg-center round-6 hero-movie__img"
					/>

					<button className="btn btn--primary hero-movie__watchlist--btn">
						Add to Watchlist
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
