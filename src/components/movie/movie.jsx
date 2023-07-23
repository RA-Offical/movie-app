import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { ButtonIcon } from "../";
import "./movie.css";

const Movie = () => {
	return (
		<article className="movie">
			<ButtonIcon
				generalClasses={"movie__btn--add btn--icon-only-sm"}
				icon={<IoMdAdd className="icon-sm" />}
			/>

			<img src="../images/3.jpg" className="round-6 movie__img" />
			<div className="movie-content">
				<h2 className="movie__name">
					Shangchi and the legend of 10 rings. This is long text here
				</h2>
			</div>
		</article>
	);
};

export default Movie;
