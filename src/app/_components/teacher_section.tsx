
import Image from 'next/image';
import teacherImage from '../../assets/home/teacher.jpg';
import teacherWithPhoneImage from '../../assets/home/teacher_phone.jpg';

const teacherOptions = [
    { label: 'Teachers', path: '/teachers' },
    { label: 'Online Teachers', path: '/online-teachers' },
    { label: 'Home Teachers', path: '/home-teachers' },
    { label: 'Assignment Help', path: '/assignment-help' },
];

const teacherPhoneOptions = [
    { label: 'Teaching Job', path: '/teachers' },
    { label: 'Online Teaching', path: '/online-teachers' },
    { label: 'Home Teaching', path: '/home-teachers' },
    { label: 'Assignment Jobs', path: '/assignment-help' },
]

const TeacherSection = () => {
    return (
        <>
            <div className="flex items-center justify-between space-x-10 p-10 w-full bg-white rounded-xl  max-w-6xl mx-auto">
               <div className=' w-1/2'>
               <Image
                width={1000}
                height={1000}
                    src={'/home/teacher.jpg'}
                    alt="teacher"
                    className="h-[400px] w-[600px] object-cover rounded-xl "
                />
               </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-3">Get a Teacher</h2>
                    <p className="text-lg mb-6">
                        Get a teacher for your child and get the best learning experience
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        {
                            teacherOptions.map(({ label, path }: { label: string; path: string }) => (

                                <div className=' 
                            cursor-pointer 
                            rounded-2xl 
                            p-5 
                            border
                            border-gray-300
                            bg-white
                            hover:bg-gray-50
                            font-semibold 
                            text-center

                            hover:scale-105 
                         transition-transform duration-300
                          '>
                                    {label}
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
            <div className="flex items-center justify-between space-x-10 p-4 w-full bg-white rounded-xl  max-w-6xl mx-auto">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-3">Get a Job</h2>
                    <p className="text-lg mb-6">
                        Find the best job opportunities and kickstart your career with expert guidance.
                    </p>


                    <div className="grid grid-cols-2 gap-6">
                        {
                            teacherPhoneOptions.map(({ label, path }: { label: string; path: string }) => (

                                <div className=' 
                            cursor-pointer 
                            rounded-2xl 
                            p-5 
                            border
                            border-gray-300
                            bg-white
                            hover:bg-gray-50
                            font-semibold 
                            text-center
                            hover:scale-105 
                         transition-transform duration-300
                          '>
                                    {label}
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className=' w-1/2'>
                <Image
                width={400}
                height={400}
                    src={'/home/teacher_phone.jpg'}
                    alt="teacher"
                    className=" h-[400px] w-[600px] object-cover rounded-xl "
                />
                </div>

            </div>
        </>
    );
};

export default TeacherSection;
