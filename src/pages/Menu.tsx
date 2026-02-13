import image from "../assets/hero/image.jpeg";
import { menuCategories } from "../data/menuData";

const MenuSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#F3EEE8] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">

          {/* LEFT SIDE */}
          <div className="md:w-[70%] w-full">
            <h2 className="text-[60px] md:text-[90px] leading-none font-serif text-gray-900 mb-10">
              OUR <br /> MENU
            </h2>

            <div className="w-32 h-[2px] bg-gray-900 mb-8"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              We create thoughtful menus for social gatherings.
              Because every gathering is different, we offer a range of
              menus that can be personalized to your specific needs.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="md:w-[30%] w-full flex justify-center">
            <img
              src={image}
              alt="Premium Dish"
              className="w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= CATEGORY MENU SECTION ================= */}
      <section className="bg-white py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

          {menuCategories.map((category) => (
            <div key={category.id} className="mb-32">

              {/* Category Title */}
              <div className="text-center mb-16">
                <h2 className="font-serif text-5xl md:text-6xl text-gray-900 tracking-wide">
                  {category.nameEn}
                </h2>

                <p className="text-gray-500 mt-4 text-sm">
                  {category.description}
                </p>

                <div className="w-20 h-[1px] bg-gray-300 mx-auto mt-8"></div>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">

                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start border-b border-gray-200 pb-6"
                  >
                    {/* Left */}
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {item.nameEn}
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.nameTa}
                      </p>

                      {item.isPopular && (
                        <span className="text-xs text-amber-600 mt-2 inline-block">
                          Popular Choice
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="text-lg font-serif text-gray-900">
                      ₹{item.price}
                    </div>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default MenuSection;