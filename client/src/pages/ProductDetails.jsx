import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const productData = [
    {
        id: 1,
        name: "Floral Summer Dress with Ruffles and Spaghetti Straps",
        category: "Casual",
        fabric: "Cotton",
        description: "A breezy and feminine dress perfect for warm weather, featuring a vibrant floral print, delicate ruffles, and adjustable spaghetti straps for a comfortable fit. A breezy and feminine dress perfect for warm weather, featuring a vibrant floral print, delicate ruffles, and adjustable spaghetti straps for a comfortable fit. A breezy and feminine dress perfect for warm weather, featuring a vibrant floral print, delicate ruffles, and adjustable spaghetti straps for a comfortable fit.Heavy Embroidery with Sequin Work A breezy and feminine dress perfect for warm weather, featuring a vibrant floral print, delicate ruffles, and adjustable spaghetti straps for a comfortable fit. A breezy and feminine dress perfect for warm weather, featuring a vibrant floral print, delicate ruffles, and adjustable spaghetti straps for a comfortable fit. A breezy and feminine dress perfect for warm weather, featuring a vibrant floral print, delicate ruffles, and adjustable spaghetti straps for a comfortable fit.    ",
        Work: "Heavy Embroidery with Sequin Work ",
        Inner: "Heavy Micro Cotton",
        Length: "50–51 inches",
        size: ["S", "M", "L", "XL"],
        price: 999,
        image: [assets.product2, assets.product3, assets.product4, assets.product3,]
    },
    {
        id: 2,
        name: "Party Silk Gown with Sequins and Open Back Design",
        category: "Party",
        fabric: "Silk",
        description: "Stylish party wear gown with premium silk fabric and elegant sequin work.",
        Work: "Sequin Work",
        Inner: "Micro Cotton",
        Length: "50–51 inches",
        size: ["S", "M", "L", "XL"],
        price: 2499,
        image: assets.product2
    },
    {
        id: 3,
        name: "Wedding Lehenga",
        category: "Wedding",
        fabric: "Net",
        description: "Premium wedding lehenga with heavy embroidery.",
        Work: "Heavy Embroidery",
        Inner: "Micro Cotton",
        Length: "50–51 inches",
        size: ["S", "M", "L", "XL"],
        price: 5999,
        image: assets.product2
    },
    {
        id: 4,
        name: "Denim One Piece",
        category: "Casual",
        fabric: "Denim",
        description: "Comfortable denim wear for daily use.",
        Work: "Light Work",
        Inner: "Cotton",
        Length: "50 inches",
        size: ["S", "M", "L", "XL"],
        price: 999,
        image: assets.product2
    },
    {
        id: 5,
        name: "Denim One Piece",
        category: "Casual",
        fabric: "Denim",
        description: "Stylish denim outfit.",
        Work: "Light Work",
        Inner: "Cotton",
        Length: "50 inches",
        size: ["S", "M", "L", "XL"],
        price: 1099,
        image: assets.product2
    },
    {
        id: 6,
        name: "Denim One Piece",
        category: "Casual",
        fabric: "Denim",
        description: "Modern casual denim.",
        Work: "Light Work",
        Inner: "Cotton",
        Length: "50 inches",
        size: ["S", "M", "L", "XL"],
        price: 1199,
        image: assets.product2
    }
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productData.find((p) => p.id === Number(id));
    const [selectedSize, setSelectedSize] = useState("");
    const [error, setError] = useState("");
    const [mainImage, setMainImage] = useState(
        product?.image?.[0]
    );


    if (!product) {
        return <h2 className="text-center mt-10">Product not found</h2>;
    }

    return (
        <div className="px-6 md:px-20 py-10">
            <div className="grid md:grid-cols-2 gap-10 ">

                {/* ✅ LEFT SIDE IMAGE GALLERY */}
                <div className="relative">
                    <div className="sticky top-20 flex flex-col md:flex-row gap-4">

                        {/* 🔹 MAIN IMAGE (Mobile ઉપર, Desktop right) */}
                        <div className="flex justify-center order-1 md:order-2">
                            <img
                                src={mainImage}
                                alt="product"
                                className="w-full max-w-[300px] md:max-w-none xl:h-[450px] 2xl:h-[650px] object-contain rounded-lg shadow-md"
                            />
                        </div>

                        {/* 🔹 THUMBNAILS (Mobile નીચે, Desktop left) */}
                        <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible order-2 md:order-1">
                            {product.image.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    onClick={() => setMainImage(img)}
                                    className={`w-20 h-24 object-cover rounded cursor-pointer border-2 ${mainImage === img
                                            ? "border-black"
                                            : "border-gray-300"
                                        }`}
                                />
                            ))}
                        </div>

                    </div>
                </div>

                {/* Details */}
                <div>
                    <h1 className="text-3xl font-semibold">{product.name}</h1>

                    <p className="text-[#b9935a] text-2xl font-bold mt-4">
                        ₹{product.price}
                    </p>

                    <p className="mt-4 text-gray-600">
                        {product.description}
                    </p>

                    <div className="mt-6 space-y-2">
                        <p><b>Category:</b> {product.category}</p>
                        <p><b>Fabric:</b> {product.fabric}</p>
                        <p><b>Work:</b> {product.Work}</p>
                        <p><b>Inner:</b> {product.Inner}</p>
                        <p><b>Length:</b> {product.Length}</p>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-6">
                        <p className="font-semibold mb-2 ">Select Size:</p>
                        <div className="flex gap-3 ">
                            {product.size.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setError("");
                                    }}
                                    className={`px-4 py-2 border cursor-pointer rounded-lg ${selectedSize === size
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 mt-2">{error}</p>
                    )}

                    {/* Add to Cart */}
                    <button
                        onClick={() => {
                            if (!selectedSize) {
                                setError("Please select a size");
                                return;
                            }
                        }}
                        disabled={!selectedSize}
                        className={`mt-6 px-6 py-2 rounded-lg ${selectedSize
                            ? "bg-black text-white cursor-pointer"
                            : "bg-gray-400 text-white cursor-not-allowed"
                            }`}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Related Products */}

            <h1 className="mt-8 mb-8 text-[#0f484e] text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-lg sm:mb-9 leading-tight text-center">Related Products</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {productData.slice(-4).map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full object-cover rounded-lg"
                        />
                        <h2 className="mt-4 text-lg font-medium">
                            {item.name.split(" ").length > 4
                                ? item.name.split(" ").slice(0, 4).join(" ") + "..."
                                : item.name}
                        </h2>
                        <p className="text-[#b9935a] text-lg font-semibold mt-2">
                            ₹{item.price}
                        </p>
                        <button
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            View Product
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;