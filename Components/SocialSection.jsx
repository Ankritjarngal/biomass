import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allNewsData = [
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 20, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 21, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 22, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 23, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 24, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 25, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 26, 2025", tag: "News" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", date: "Jan 27, 2025", tag: "News" },
];

const plantVisitData = {
  heading: "Suspendisse rutrum arcu varius erat tristique.",
  description: "Sed feugiat, tellus non, imperdiet tristique. Tellus vitae sodales, nullam pretium odio. Dapibus ac erat ipsum erat. Vestibulum ornare rutrum, ultrices porta, donec viverra lorem.",
};

const allSocialActivitiesData = [
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
  { title: "Suspendisse rutrum arcu varius erat tristique.", tag: "Activity" },
];

const NewsCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="w-full h-32 bg-gray-200"></div>
    <div className="p-4">
      <h3 className="text-[#257E2C] font-bold text-sm mb-2 leading-relaxed">{item.title}</h3>
      <p className="text-black font-bold text-xs mb-3">{item.date}</p>
      <p className="text-gray-600 text-xs mb-3 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
      <span className="inline-block text-xs bg-green-500 text-white px-3 py-1 rounded-full font-medium">
        Read More
      </span>
    </div>
  </div>
);

const ActivityCard = ({ item }) => (
  <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="w-full h-40 bg-gray-200 rounded-t-lg"></div>
    <div className="p-4">
      <h3 className="text-gray-800 font-semibold text-sm mb-2 leading-relaxed">{item.title}</h3>
      <p className="text-gray-600 text-xs mb-3 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
      <span className="inline-block text-xs bg-green-500 text-white px-3 py-1 rounded-full font-medium">
        {item.tag}
      </span>
    </div>
  </div>
);

const ScrollableSection = ({ children, title, showMore, onShowMore }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {showMore && (
          <button 
            onClick={onShowMore}
            className="text-xs bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors font-medium"
          >
            View More
          </button>
        )}
      </div>
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-green-500 hover:bg-green-600 p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </section>
  );
};

const NewsSocialSection = () => {
  const [showAllNews, setShowAllNews] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);

  const displayedNews = showAllNews ? allNewsData : allNewsData.slice(0, 4);
  const displayedActivities = showAllActivities ? allSocialActivitiesData : allSocialActivitiesData.slice(0, 6);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Latest News */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-black">Latest News</h2>
          <button 
            onClick={() => setShowAllNews(!showAllNews)}
            className="text-xs bg-[#257E2C] text-white px-4 py-2 rounded-full transition-colors font-medium"
          >
            {showAllNews ? 'Show Less' : 'View More'}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedNews.map((item, idx) => (
            <NewsCard key={idx} item={item} />
          ))}
        </div>
      </section>

      {/* Plant Visit */}
      <section className="bg-[#E7FFDB] py-8 px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-bloack mb-2">Plant Visit</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <h3 className="text-[#257E2C] text-4xl font-semibold leading-relaxed">
              {plantVisitData.heading}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {plantVisitData.description}
            </p>
          </div>
          <div className="h-64 lg:h-80 bg-gray-300 rounded-lg"></div>
        </div>
      </section>

      {/* Social Activities */}
      <ScrollableSection 
        title="Social Activities" 
        showMore 
        onShowMore={() => setShowAllActivities(!showAllActivities)}
      >
        {displayedActivities.map((item, idx) => (
          <ActivityCard key={idx} item={item} />
        ))}
      </ScrollableSection>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default NewsSocialSection;