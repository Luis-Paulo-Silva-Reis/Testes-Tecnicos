import { useState } from "react";
import PropTypes from "prop-types";

function ButtonWithHover({
  defaultImage,
  hoverImage,
  href,
  class1 = "",
  class2 = "",
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      className={class1}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <a href={href} className={class2}>
        <img src={isHovering ? hoverImage : defaultImage} alt="" />
      </a>
    </button>
  );
}

ButtonWithHover.propTypes = {
  defaultImage: PropTypes.string.isRequired,
  hoverImage: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  class1: PropTypes.string,
  class2: PropTypes.string,
};

export default ButtonWithHover;
