import React, { useState } from 'react';
import { FaStar, FaRegClock, FaRegListAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css'
// --- Composant pour les boutons de navigation personnalisés ---
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-blue-prgrs text-white p-2 rounded-full hover:bg-[#22D3EE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-blue-prgrs text-white p-2 rounded-full hover:bg-[#22D3EE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// --- Composant principal Courses ---
const Courses = () => {
  const courses = [
    {
      title: "Machine Learning Fundamentals",
      duration: "4 weeks",
      modules: "12 modules",
      level: "Beginner",
      progress: 65,
      action: "KEEP LEARNING",
      rating: 4.5,
      students: 1243,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=ML",
      tags: ["Python", "Data Science", "ML"],
    },
    {
      title: "Deep Learning with PyTorch",
      duration: "6 weeks",
      modules: "18 modules",
      level: "Intermediate",
      progress: 0,
      action: "START LEARNING",
      rating: 4.2,
      students: 876,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=DL",
      tags: ["PyTorch", "Neural Networks", "DL"],
    },
    {
      title: "Data Science with Python",
      duration: "8 weeks",
      modules: "20 modules",
      level: "Advanced",
      progress: 80,
      action: "CONTINUE",
      rating: 4.9,
      students: 2100,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=DS",
      tags: ["Python", "Pandas", "NumPy", "Data Analysis"],
    },
    {
      title: "Web Development Basics",
      duration: "5 weeks",
      modules: "15 modules",
      level: "Beginner",
      progress: 30,
      action: "RESUME",
      rating: 4.0,
      students: 950,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=WD",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    },
    {
      title: "Mobile App Development",
      duration: "7 weeks",
      modules: "16 modules",
      level: "Intermediate",
      progress: 45,
      action: "CONTINUE",
      rating: 4.3,
      students: 1100,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=MA",
      tags: ["React Native", "Android", "iOS", "Mobile"],
    },
    {
      title: "Cloud Computing",
      duration: "6 weeks",
      modules: "14 modules",
      level: "Advanced",
      progress: 10,
      action: "START LEARNING",
      rating: 4.7,
      students: 750,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=CC",
      tags: ["AWS", "Azure", "Cloud", "DevOps"],
    },
    {
      title: "Cybersecurity Essentials",
      duration: "6 weeks",
      modules: "12 modules",
      level: "Intermediate",
      progress: 15,
      action: "START LEARNING",
      rating: 4.6,
      students: 620,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=CE",
      tags: ["Security", "Ethical Hacking", "Network", "Firewall"],
    },
    {
      title: "Blockchain Basics",
      duration: "5 weeks",
      modules: "10 modules",
      level: "Advanced",
      progress: 5,
      action: "START LEARNING",
      rating: 4.8,
      students: 430,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=BB",
      tags: ["Ethereum", "Smart Contracts", "Cryptocurrency", "Decentralized"],
    },
    {
      title: "UI/UX Design Principles",
      duration: "4 weeks",
      modules: "10 modules",
      level: "Beginner",
      progress: 0,
      action: "START LEARNING",
      rating: 4.8,
      students: 1500,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=UI",
      tags: ["Figma", "Design", "User Experience", "Wireframing"],
    },
    {
      title: "DevOps for Developers",
      duration: "8 weeks",
      modules: "15 modules",
      level: "Advanced",
      progress: 25,
      action: "CONTINUE",
      rating: 4.7,
      students: 880,
      image: "https://placehold.co/100x100/5C21C5/FFFFFF?text=DO",
      tags: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "DevOps"],
    },
  ];

  // --- Créer une liste unique de tous les tags pour les filtres ---
  const allTags = [...new Set(courses.flatMap((course) => course.tags))];
  // const filters = ["ALL COURSES", ...allTags];
  const filters = ["ALL COURSES", "Python", "Data Science", "DevOps", "Frontend", "Design", "Security"];


  // --- État pour le filtre actif ---
  const [activeFilter, setActiveFilter] = useState("ALL COURSES");

  // --- Filtrer les cours en fonction du tag sélectionné ---
  const filteredCourses =
    activeFilter === "ALL COURSES"
      ? courses
      : courses.filter((course) => course.tags.includes(activeFilter));

  // --- Regrouper les cours filtrés par paquets de 6 ---
  const groupedCourses = [];
  const chunkSize = 6;
  for (let i = 0; i < filteredCourses.length; i += chunkSize) {
    groupedCourses.push(filteredCourses.slice(i, i + chunkSize));
  }

  // --- Composant CourseCard (inchangé) ---
  const CourseCard = ({ course }) => (
    <div className="bg-[linear-gradient(135deg,_#0A141F_0%,_#061B31_100%)] shadow-xl p-6 transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-700 hover:border-blue-500 flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/100x100/3B82F6/FFFFFF?text=Course";
          }}
        />
        <div>
          <div className="flex items-center text-accent-yellow text-sm">
            <FaStar className="text-accent-yellow" />
            <span className="ml-1 font-semibold">{course.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">
            {course.students.toLocaleString()} students
          </span>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-3 text-white leading-tight">{course.title}</h2>
      <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
        <span className="flex items-center">
          <FaRegClock className="w-4 h-4 mr-1" />
          {course.duration}
        </span>
        <span className="flex items-center">
          <FaRegListAlt className="w-4 h-4 mr-1" />
          {course.modules}
        </span>
      </div>
      <div className="mb-4 ">
        <span className="inline-block border-purple-400 border-2 shadow-purple-natural text-blue-100 text-xs px-3 py-1 rounded-full font-semibold ">
          {course.level}
        </span>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-300">Your Progress</span>
          <span className="font-semibold text-white">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-2.5 bg-[linear-gradient(90deg,_#165173_0%,_#0E3761_100%)]"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
      <button class="
  bg-[#165173]
  text-[#22D3EE]
  hover:bg-[#1f6a98]
  focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-opacity-75
  rounded-lg
  shadow-lg
  w-full py-3 px-6
  font-bold text-lg
  flex items-center justify-center space-x-2
  transition-all duration-300 ease-in-out
">
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
  <span class="
    text-[#22D3EE]
    tracking-wide
    uppercase
  ">
    {course.action || 'Start Learning'}
  </span>
</button>
    </div>
  );

  return (
    <div className="min-h-screen px-[50px] py-5 font-inter text-gray-100 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* --- Section des filtres --- */}
        <div className="flex flex-wrap gap-3  flex-col items-start mb-10">
          <p
            onClick={() => setActiveFilter("ALL COURSES")}
            className={`text-accent-yellow   text-px-20  [letter-spacing:0.5em] font-press  cursor-pointer mb-2 ${
              activeFilter === "ALL COURSES" ? "" :""
            }`}
          >
            ALL COURSES
          </p>
          <div className="flex flex-wrap gap-2">
            {filters.slice(1).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full border-2 border-purple-400 transition-all shadow-purple-natural ${
                  activeFilter === filter
                    ? "bg-white text-purple-900 border-white font-bold"
                    : "bg-transparent border-white text-white hover:bg-white hover:bg-opacity-20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* --- Swiper pour afficher les cours --- */}
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          modules={[Navigation]}
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Your Courses</h3>
            {groupedCourses.length > 1 && <SliderButtons />}
          </div>

          {groupedCourses.length > 0 ? (
            groupedCourses.map((group, groupIndex) => (
              <SwiperSlide key={`group-${groupIndex}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {group.map((course, courseIndex) => (
                    <CourseCard key={`course-${groupIndex}-${courseIndex}`} course={course} />
                  ))}
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="text-center text-gray-400">
                No courses found for the selected filter.
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;