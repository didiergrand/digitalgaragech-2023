import Image from "next/image";

// exemple de code https://codepen.io/didiergrand/pen/GRXdooP
const PhotoItem = ({ title, horizontalimg, images, date, description, note }) => {
  return (
    <>
    <div className="max-w-7xl mx-auto mb-8">
            <h4>{title}</h4>
            <small className="date text-gray-400">{date}</small>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <small className="note text-gray-400" dangerouslySetInnerHTML={{ __html: note }} />
          {horizontalimg  === "right" ? (   
          <div className="photogallery grid grid-cols-1 sm:grid-rows-2 pt-8 sm:grid-cols-2 sm:grid-flow-col">
              <div>
                  <Image src={images[0]} width={1334} height={2000} alt={title} quality={100} />
              </div>
              <div>
                  <Image src={images[2]} width={1334} height={2000} alt={title} quality={100} />
              </div>
              <div className="row-span-2">
                  <Image src={images[1]} width={2000} height={1334} alt={title} quality={100} />  {/* grande image */} 
              </div>
          </div>
          ) : horizontalimg === "left" ? (
            <div className="photogallery grid grid-cols-1 sm:grid-rows-2 pt-8 sm:grid-cols-2 grid-flow-row">
              <div className="row-span-2">
                <Image src={images[0]} width={1334} height={2000} alt={title} quality={100} /> {/* grande image */} 
              </div>
              <div>
                <Image src={images[1]} width={2000} height={1334} alt={title} quality={100} />
              </div>
              <div>
                <Image src={images[2]} width={2000} height={1334} alt={title} quality={100} />
              </div>
            </div>
          ) : horizontalimg === "top" ? (
            <div className="photogallery grid grid-cols-1 sm:grid-rows-2 pt-8 sm:grid-cols-2 grid-flow-row">
              <div className="col-span-2">
                <Image src={images[0]} width={1334} height={2000} alt={title} quality={100} /> {/* grande image */} 
              </div>
              <div>
                <Image src={images[1]} width={2000} height={1334} alt={title} quality={100} />
              </div>
              <div>
                <Image src={images[2]} width={2000} height={1334} alt={title} quality={100} />
              </div>
            </div>
          ) : (
            <div className="photogallery grid grid-cols-3 pt-8">
            <div>
                <Image src={images[0]} width={1334} height={2000} alt={title} quality={100} />
            </div>
            <div>
                <Image src={images[2]} width={1334} height={2000} alt={title} quality={100} />
            </div>
            <div>
                <Image src={images[1]} width={2000} height={1334} alt={title} quality={100} />  {/* grande image */} 
            </div>
        </div>
          )}
            
    </div>
    <hr className="mb-12"/>
    </>
  );
};

export default PhotoItem;
