import React, { useState } from "react";

const LostAndFound = () => {
  const [lostItems, setLostItems] = useState([]);
  const [lostItem, setLostItem] = useState({
    name: "",
    description: "",
    location: "",
    contact: "",
    image: null,
  });
  const [foundItem, setFoundItem] = useState({
    description: "",
    location: "",
    image: null,
  });
  const [lostImagePreviewUrl, setLostImagePreviewUrl] = useState(null);
  const [foundImagePreviewUrl, setFoundImagePreviewUrl] = useState(null);

  // Handle input changes for lost and found items
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "lost") {
      setLostItem({ ...lostItem, [name]: value });
    } else {
      setFoundItem({ ...foundItem, [name]: value });
    }
  };

  // Handle image upload
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === "lost") {
      setLostItem({ ...lostItem, image: file });
      setLostImagePreviewUrl(URL.createObjectURL(file));
    } else {
      setFoundItem({ ...foundItem, image: file });
      setFoundImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  // Submit lost item form
  const handleLostItemSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...lostItem, id: lostItems.length + 1, found: false };
    setLostItems([...lostItems, newItem]);
    setLostItem({
      name: "",
      description: "",
      location: "",
      contact: "",
      image: null,
    });
    setLostImagePreviewUrl(null);
    alert("Lost item submitted successfully!");
  };

  // Submit found item form
  const handleFoundItemSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...foundItem, id: lostItems.length + 1, found: true };
    setLostItems([...lostItems, newItem]);
    setFoundItem({
      description: "",
      location: "",
      image: null,
    });
    setFoundImagePreviewUrl(null);
    alert("Found item submitted successfully!");
  };

  // Mark item as found
  const handleMarkAsFound = (id) => {
    setLostItems(
      lostItems.map((item) =>
        item.id === id ? { ...item, found: true } : item
      )
    );
  };

  return (
    <div className="w-full min-h-screen p-6" style={{ backgroundColor: "rgb(243, 244, 246)" }}> {/* Main Background Color */}
      <h1 className="text-4xl font-bold mb-6 text-center">Hostel Lost and Found</h1>

      {/* Lost Item Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Report Lost Item</h2>
        <form onSubmit={handleLostItemSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            value={lostItem.name}
            onChange={(e) => handleInputChange(e, "lost")}
            placeholder="Item Name"
            required
            className="mb-4 w-full px-4 py-2 border rounded"
          />
          <textarea
            name="description"
            value={lostItem.description}
            onChange={(e) => handleInputChange(e, "lost")}
            placeholder="Item Description"
            required
            className="mb-4 w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={lostItem.location}
            onChange={(e) => handleInputChange(e, "lost")}
            placeholder="Lost Location"
            required
            className="mb-4 w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="contact"
            value={lostItem.contact}
            onChange={(e) => handleInputChange(e, "lost")}
            placeholder="Your Contact Info"
            required
            className="mb-4 w-full px-4 py-2 border rounded"
          />
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, "lost")}
            accept="image/*"
            className="mb-4"
          />
          {lostImagePreviewUrl && <img src={lostImagePreviewUrl} alt="Preview" className="mt-4 w-32 h-32 object-cover" />}
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Lost Item</button>
        </form>
      </section>

      {/* Found Item Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Report Found Item</h2>
        <form onSubmit={handleFoundItemSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <textarea
            name="description"
            value={foundItem.description}
            onChange={(e) => handleInputChange(e, "found")}
            placeholder="Item Description"
            required
            className="mb-4 w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={foundItem.location}
            onChange={(e) => handleInputChange(e, "found")}
            placeholder="Found Location"
            required
            className="mb-4 w-full px-4 py-2 border rounded"
          />
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, "found")}
            accept="image/*"
            className="mb-4"
          />
          {foundImagePreviewUrl && <img src={foundImagePreviewUrl} alt="Preview" className="mt-4 w-32 h-32 object-cover" />}
          <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Submit Found Item</button>
        </form>
      </section>

      {/* Lost and Found Items List */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Lost and Found Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lostItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              {item.image && <img src={URL.createObjectURL(item.image)} alt="Item" className="h-32 w-full object-cover mb-4" />}
              <h3 className="text-xl font-semibold mb-2">{item.name || "Found Item"}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-600 mb-2">Location: {item.location}</p>
              <p className="text-gray-600 mb-4">Contact: {item.contact || "N/A"}</p>
              <p className={`text-${item.found ? "green" : "red"}-600 font-bold`}>
                {item.found ? "Item Found" : "Not Found Yet"}
              </p>
              {!item.found && (
                <button
                  onClick={() => handleMarkAsFound(item.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Mark as Found
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LostAndFound;
