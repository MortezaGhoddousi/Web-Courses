
import React, { useState } from "react";
import "../styles/image.css";

function Image({
  src,
  alt = "",
  width,
  height,
  className = "",
  fallback = "/images/placeholder.png",
  objectFit = "cover",
  priority = false,
  onLoad,
  onError,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (event) => {
    setLoaded(true);
    onLoad?.(event);
  };

  const handleError = (event) => {
    if (!hasError && fallback) {
      setHasError(true);
      setImageSrc(fallback);
    }

    onError?.(event);
  };

  return (
    <div
      className={`image-wrapper ${className}`}
      style={{
        width: width || "100%",
        height: height || "auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {!loaded && (
        <div className="image-loading">
          Loading...
        </div>
      )}

      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: "100%",
          height: "100%",
          objectFit,
          display: loaded ? "block" : "none",
        }}
        {...props}
      />
    </div>
  );
}

export default Image;
