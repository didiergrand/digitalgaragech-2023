const Testimonials = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-4xl font-bold mb-6">Ce que mes clients disent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <blockquote className="border-l-4 border-blue-500 px-4 py-2">
                <p className="text-lg mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla tortor, eget iaculis dolor. Nulla facilisi. Ut sed arcu hendrerit, imperdiet quam quis, commodo felis. Ut interdum vel justo vel imperdiet."
                </p>
                <cite className="font-bold">John Doe, Entreprise X</cite>
              </blockquote>
            </div>
            <div>
              <blockquote className="border-l-4 border-blue-500 px-4 py-2">
                <p className="text-lg mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla tortor, eget iaculis dolor. Nulla facilisi. Ut sed arcu hendrerit, imperdiet quam quis, commodo felis. Ut interdum vel justo vel imperdiet."
                </p>
                <cite className="font-bold">Jane Doe, Entreprise Y</cite>
              </blockquote>
            </div>
            <div>
              <blockquote className="border-l-4 border-blue-500 px-4 py-2">
                <p className="text-lg mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla tortor, eget iaculis dolor. Nulla facilisi. Ut sed arcu hendrerit, imperdiet quam quis, commodo felis. Ut interdum vel justo vel imperdiet."
                </p>
                <cite className="font-bold">Bob Smith, Entreprise Z</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  