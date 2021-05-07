export default function Slider() {
    return (
        <section>     
            <div className="py-20 bg-gray-100 radius-for-skewed overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                    <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
                        <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                            <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Testimonials</h2>
                        </div>
                        <div className="w-full lg:w-1/5">
                            <button className="mr-4 bg-white p-5 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition duration-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                            </button>
                            <button className="bg-white p-5 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition duration-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative flex">
                    <div className="hidden lg:block absolute top-0 left-0 lg:w-1/3 px-3 -ml-80 opacity-25">
                        <div className="p-8 bg-white rounded shadow text-center">
                            <div>
                                <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                                <p className="text-gray-500">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
                        <div className="mb-4 w-full lg:w-1/3 px-3">
                            <div className="p-8 bg-white rounded shadow text-center">
                                <div>
                                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                    <h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                                    <p className="text-gray-500">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 w-full lg:w-1/3 px-3">
                            <div className="p-8 bg-white rounded shadow text-center">
                                <div>
                                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                    <h4 className="mb-1 text-2xl font-bold font-heading">Dennis Robertson</h4>
                                    <p className="text-gray-500">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 w-full lg:w-1/3 px-3">
                            <div className="p-8 bg-white rounded shadow text-center">
                                <div>
                                    <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                    <h4 className="mb-1 text-2xl font-bold font-heading">Daisy Carter</h4>
                                    <p className="text-gray-500">Product Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block absolute top-0 right-0 lg:w-1/3 px-3 -mr-80 opacity-25">
                        <div className="p-8 bg-white rounded shadow text-center">
                            <div>
                                <p className="mb-8 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                                <h4 className="mb-1 text-2xl font-bold font-heading">Alice Bradley</h4>
                                <p className="text-gray-500">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}