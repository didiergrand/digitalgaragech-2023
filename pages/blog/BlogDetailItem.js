import Image from "next/image";
import { formatDate } from "@component/utils/dateUtils";

const BlogDetailItem = ({ post, date, title, slug, content, imageUrl }) => {


const originalDate = date;
const formattedDate = formatDate(originalDate);

  return (
    <div className="blogitem max-w-7xl mx-auto p-6 pb-0 pt-0 language-js">
      <div className="pt-8 mb-10 sm:mb-0">
        <h1 className="sm:mb-10"
            dangerouslySetInnerHTML={{ __html: title }} />
        <Image
          src={imageUrl}
          width={1333}
          height={2000}
          alt={slug}
          unoptimized
          className="featured_media"
        />
      </div>
      <div className="sm:grid grid-cols-12 gap-4">
        <div className="col-start-2 col-end-11 lg:col-start-3 lg:col-end-11 pt-8 pb-8">
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <small className="date">
            Article publié le : {formattedDate}
          </small>
        </div>
      </div>
    </div>
  );
};


export default BlogDetailItem;
