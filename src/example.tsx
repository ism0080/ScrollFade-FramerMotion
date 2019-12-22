import * as React from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from "framer-motion";
import { Card } from "./card";

export const Example = () => {
  const [imageHeight, getImageHeight] = React.useState<number>(0);
  const ref = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    // Gets the height of the image
    const image = (ref.current && ref.current.height) || 0;
    getImageHeight(image);
  }, [imageHeight]);

  // Choose at what point the image opacity becomes 0
  // E.G: 50px from the top
  const offsetHeight = 50;
  // Vertical scroll distance in pixels.
  const { scrollY } = useViewportScroll();
  // Transforms scroll and image height values to opacity values
  const yRange = useTransform(scrollY, [imageHeight - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  return (
    <div className="container">
      <motion.img
        ref={ref}
        src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80"
        alt="gradient"
        style={{ opacity }}
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
