import { Loader } from "..";
import "./fixed-overlay-loader.css";

const FixedOverlayLoader = () => {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 fixed-ovarlay-loader">
			<Loader
				generalClasses={
					"absolute left-50x bottom-0 abs-gen-self-center"
				}
			/>
		</div>
	);
};

export default FixedOverlayLoader;
