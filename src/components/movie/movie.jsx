import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { ButtonIcon } from "../";
import "./movie.css";

const Movie = ({ id, name, img_url, type }) => {
	return (
		<article className="movie">
			<ButtonIcon
				generalClasses={`movie__btn--${
					type === "add" ? "add" : "delete"
				} btn--icon-only-sm`}
				icon={
					type === "add" ? (
						<IoMdAdd className="icon-sm" />
					) : (
						<MdDelete className="icon-sm" />
					)
				}
			/>

			<img src={img_url} className="round-6 movie__img" alt={name} />
			<div className="movie-content">
				<h2 className="movie__name">{name}</h2>
			</div>
		</article>
	);
};

export default Movie;
