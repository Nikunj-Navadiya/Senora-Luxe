import React, { useRef, useState } from "react";
import assets from "../assets/assets";

const AddProducts = () => {
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        metal: "",
        purity: "",
        weight: "",
        price: "",
        description: "",
    });

    const [images, setImages] = useState([]);

    // 🔹 Form Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 🔹 Upload Click
    const handleUploadClick = () => {
        if (images.length >= 5) {
            alert("Maximum 5 images allowed");
            return;
        }
        fileInputRef.current.click();
    };

    // 🔹 Image Select
    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (!selectedFiles.length) return;

        const remaining = 5 - images.length;
        const filesToAdd = selectedFiles.slice(0, remaining);

        setImages((prev) => [...prev, ...filesToAdd]);
        e.target.value = null;
    };

    // 🔹 Remove Image
    const removeImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="p-6 bg-white rounded shadow max-w-3xl">
            <h1 className="text-2xl font-bold mb-6">Add Jewellery Product</h1>


        {/* 📸 Jewellery Image Upload */}
            <div className="mt-6">
                <label className="block mb-2 font-medium">
                    Product Images (Max 5)
                </label>

                <div
                    onClick={handleUploadClick}
                    className="w-32 h-32 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-50"
                >
                    <img
                        src={assets.upload_area}
                        alt="upload"
                        className="w-20 h-20 object-contain"
                    />
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                />

                <div className="flex gap-3 mt-4 flex-wrap">
                    {images.map((img, index) => (
                        <div key={index} className="relative">
                            <img
                                src={URL.createObjectURL(img)}
                                alt="preview"
                                className="w-24 h-24 object-cover border rounded"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    {images.length}/5 images selected
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option value="">Select Category</option>
                    <option>Ring</option>
                    <option>Necklace</option>
                    <option>Bangle</option>
                    <option>Earrings</option>
                </select>

                <select
                    name="metal"
                    value={formData.metal}
                    onChange={handleChange}
                    className="border p-2 rounded"  
                >
                    <option value="">Select Metal</option>
                    <option value="Gold">Gold</option>
                    <option value="Diamond">Diamond</option>
                </select>

                <input
                    type="text"
                    name="purity"
                    placeholder="Purity (22K, 18K)"
                    value={formData.purity}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    name="weight"
                    placeholder="Weight (grams)"
                    value={formData.weight}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
            </div>

            <textarea
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleChange}
                className="border p-2 rounded w-full mt-4"
                rows={4}
            />

            <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Save Product
            </button>
        </div>
    );
};

export default AddProducts;
