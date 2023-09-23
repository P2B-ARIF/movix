import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// p2b

const Img = ({ src, className = "" }) => {
	return (
		<LazyLoadImage className={className || ""} alt='' effect='blur' src={src} />
	);
};

export default Img;
