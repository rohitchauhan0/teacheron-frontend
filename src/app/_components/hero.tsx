"use client";

import Image from "next/image";

// Custom Input Component
function CustomInput({ placeholder }: { placeholder: string }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#4C6EF5] shadow-sm"
        />
    );
}

// Custom Button Component
function CustomButton({ children }: { children: React.ReactNode }) {
    return (
        <button className=" text-black border border-gray-400 px-5 py-2 rounded font-medium">
            {children}
        </button>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            {/* Hero Section */}
            <div
                className="relative h-[320px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: 'url(/home/star-magic.jpg)' }}
            >
                <div className="bg-black bg-opacity-70 p-6 rounded-xl max-w-3xl w-full text-center">
                    <h1 className="text-white text-xl md:text-2xl font-semibold mb-4">
                        Find online teachers and home tutors for free
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <CustomInput placeholder="Subject / Skill" />
                        <CustomInput placeholder="Location" />
                        <button className="bg-[#4C6EF5] text-white px-5 py-2 rounded font-medium">Search</button>
                    </div>
                </div>
            </div>

            {/* Teachers & Teaching Jobs */}
            <div className="py-10 px-4 text-center max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:space-x-20">
                    <div>
                        <h2 className="text-xl font-semibold text-[#4C6EF5] mb-4">Teachers</h2>
                        <div className=" grid grid-cols-2 gap-3">
                            {['Teachers', 'Online Teachers', 'Home Teachers', 'Assignment Help'].map((item, idx) => (
                                <CustomButton key={idx}>{item}</CustomButton>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-[#4C6EF5] mb-4">Teaching Jobs</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {['Teaching Jobs', 'Online Teaching', 'Home Teaching', 'Assignment Jobs'].map((item, idx) => (
                                <CustomButton key={idx}>{item}</CustomButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-fixed"
                style={{ backgroundImage: "url(/home/faces.jpg)" }}
            >
                {/* High Quality Teachers Section */}
                <div className=" bg-black/30 text-white py-8 text-center "

                >
                    <h3 className="text-lg md:text-xl font-semibold text-[#4C6EF5] mb-2">
                        High Quality Teachers
                    </h3>
                    <p className="text-sm md:text-base">
                        ONLY <span className="text-[#4C6EF5]">55.1%</span> OF TEACHERS THAT APPLY MAKE THROUGH OUR APPLICATION PROCESS
                    </p>
                </div>

                {/* Stats Section */}
                <div className="py-10 px-4 bg-white grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
                    <div>
                        <h4 className="text-2xl font-bold text-gray-700">9500+</h4>
                        <p className="text-sm text-gray-600">Subjects</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-gray-700">1500+</h4>
                        <p className="text-sm text-gray-600">Skills</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-gray-700">1000+</h4>
                        <p className="text-sm text-gray-600">Languages</p>
                    </div>
                </div>


                <div className=" bg-white">
                    <div className="bg-[url('/home/brick.png')] bg-cover bg-center text-center py-10 px-6">
                        <div className="bg-white bg-opacity-80 max-w-4xl mx-auto rounded-lg p-6 md:p-10">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What we do?</h2>
                            <p className="text-gray-700 text-base mb-4">
                                TeacherOn.com is a free website, trusted by thousands of students and teachers, all over the world.
                            </p>
                            <p className="text-gray-700 text-base">
                                You can find local tutors, online teachers, and teachers to help with tutoring, coaching,
                                assignments, academic projects, and dissertations for over <strong>9500</strong> subjects.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex items-center justify-center py-20 bg-black/30">
                    <Image
                        width={1000}
                        height={1000}
                        src={'/home/country.png'}
                        alt="teacher"
                        className="h-[400px] w-[600px] object-cover rounded-xl "
                    />
                </div>
            </div>
        </div>
    );
}
