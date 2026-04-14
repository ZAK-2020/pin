
import { Image } from "@imagekit/react";
const ImageComponent = ({path,src,alt,className,w,h}) => {
  return (
     <Image
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        src={path}
        // src={src}
        transformation={[
          {
            height: h,
            width: w,
          },
        ]}
        loading = "lazy"
        className={className}
        lqip = {{active:true, quality:20}}
        alt={alt}
      />
  )
}

export default ImageComponent