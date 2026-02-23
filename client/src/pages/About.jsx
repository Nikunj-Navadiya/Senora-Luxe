import React from 'react'
import assets from '../assets/assets'

const About = () => {
    return (
        <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 bg-[#f1f5f6] pt-5 xl:pt-8 2xl:pt-10'>
            <h1 className='text-[#0f484e] text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-lg  mb-2 sm:mb-9 leading-tight text-center '>The Craft Behind Every Senora Luxe Creation</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Fiber Selection – The Beginning of Fabric</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">
                        A skilled worker inspects soft cotton fibers inside a textile facility, showcasing Senora Luxe’s commitment to premium fiber selection, where high-quality cotton, wool, and silk begin their journey into fabric.
                    </p>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about1}
                        alt=""
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Image Section */}
                <div className=" flex justify-center order-2 sm:order-1">
                    <img
                        src={assets.about2}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>

                {/* Text Section */}
                <div className="order-1 sm:order-2">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Spinning – Turning Fiber into Yarn</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">A textile worker operates advanced spinning machines, transforming soft raw fibers into fine, durable yarn. Carefully crafted threads reflect Senora Luxe’s dedication to quality, preparing premium yarn for exceptional fabric creation.</p>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Weaving & Knitting – Making the Fabric</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">A skilled artisan weaves vibrant threads on a traditional loom while delicate knitting transforms yarn into soft fabric. Senora Luxe blends craftsmanship and precision to create strong, lustrous, beautifully crafted textiles.</p>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about3}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Image Section */}
                <div className=" flex justify-center order-2 sm:order-1">
                    <img
                        src={assets.about4}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
                {/* Text Section */}
                <div className="order-1 sm:order-2">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Dyeing & Printing – Adding Colours & Designs</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">Skilled artisans dye fabrics in vibrant hues and apply intricate block prints, blending tradition with precision. Senora Luxe ensures rich colors, lasting colorfastness, and beautifully finished designs that elevate every textile.</p>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Fabric Inspection & Quality Check</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">A meticulous inspector examines embroidered fabric with precision, ensuring flawless color, measurements, and finish. Advanced machinery and careful checks guarantee only approved, high-quality textiles meet Senora Luxe’s exceptional standards.</p>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about5}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Image Section */}
                <div className=" flex justify-center order-2 sm:order-1">
                    <img
                        src={assets.about6}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>

                {/* Text Section */}
                <div className="order-1 sm:order-2">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Pattern Making and Cutting</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">A skilled tailor carefully stitches fabric using precision patterns, transforming materials into elegant garments. Detailed cutting and finishing ensure each Senora Luxe creation meets high standards of craftsmanship, beauty, and flawless fit.</p>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Stitching & Embroidery</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">A skilled artisan stitches fabric panels with precision while advanced embroidery machines craft intricate lace and zari designs. Senora Luxe blends craftsmanship and technology to create beautifully detailed, perfectly finished garments.</p>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about7}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Image Section */}
                <div className=" flex justify-center order-2 sm:order-1">
                    <img
                        src={assets.about8}
                        alt="Krishnas Jewellers Collection"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
                {/* Text Section */}
                <div className="order-1 sm:order-2">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Final Finishing & Ironing</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">A skilled artisan carefully steam irons an embroidered garment, ensuring smooth finish and perfect presentation. Final inspections, thread trimming, tagging, and labeling complete Senora Luxe’s commitment to refined, ready-to-wear excellence.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-10 pb-10">
                {/* Text Section */}
                <div className="">
                    <h1 className='text-[#0f484e] text-3xl  font-semibold drop-shadow-lg leading-tight mb-2'>Packaging & Delivery</h1>
                    <p className="text-[#0f484e] text-xl md:text-2xl font-medium ">
                        A dedicated worker carefully packages vibrant garments while a delivery professional loads branded Senora Luxe boxes into a van, ensuring safe packaging, swift shipping, and reliable, timely delivery to customers.
                    </p>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center">
                    <img
                        src={assets.about9}
                        alt=""
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-103"
                    />
                </div>
            </div>


        </div>
    )
}

export default About