import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CiImageOn } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

import { IoIosAddCircleOutline } from "react-icons/io";


const ItemType = "ITEM";
const CategoryType = "CATEGORY";

const Question1 = () => {
  const [categories, setCategories] = useState(["cat1", "cat2"]);
  const [items, setItems] = useState(["ans1", "ans2"]);
  const [newCategory, setNewCategory] = useState("");
  const [newItem, setNewItem] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleAddCategory = (e) => {
    if (e.key === "Enter" && newCategory.trim() !== "") {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const handleAddCategorize = () => {
    
  }

  const handleAddItem = (e) => {
    if (e.key === "Enter" && newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setSelectedCategories({
        ...selectedCategories,
        [items.length]: "",
      });
      setNewItem("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (itemIndex, value) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [itemIndex]: value,
    }));
  };

  const moveItem = (fromIndex, toIndex) => {
    if (fromIndex === toIndex) return;

    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  const moveCategory = (fromIndex, toIndex) => {
    if (fromIndex === toIndex) return;

    const updatedCategories = [...categories];
    const [movedCategory] = updatedCategories.splice(fromIndex, 1);
    updatedCategories.splice(toIndex, 0, movedCategory);
    setCategories(updatedCategories);
  };

  const removeCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);

    const updatedSelections = { ...selectedCategories };
    delete updatedSelections[index];
    setSelectedCategories(updatedSelections);
  };

  const DraggableCategory = ({ index, category }) => {
    const [{ isDragging }, drag] = useDrag({
      type: CategoryType,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <div
        ref={drag}
        className="relative flex items-center gap-2 px-2 py-1 bg-blue-100 border border-blue-300 rounded-md w-[120px] mb-2"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {category}
        <button
          className="absolute -top-2 -right-2 p-1 text-red-500"
          onClick={() => removeCategory(index)}
          title="Remove Category"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  };

  const DraggableItem = ({ index, item }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemType,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <div
        ref={drag}
        className="relative flex items-center gap-2 px-2 py-1 bg-green-100 border border-green-300 rounded-md w-[120px] mb-2"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {item}
        <button
          className="absolute -top-2 -right-2 p-1 text-red-500"
          onClick={() => removeItem(index)}
          title="Remove Item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  };

  const DropZoneCategory = ({ index, children }) => {
    const [, drop] = useDrop({
      accept: CategoryType,
      hover: (item) => {
        if (item.index !== index) {
          moveCategory(item.index, index);
        }
      },
    });

    return <div ref={drop}>{children}</div>;
  };

  const DropZoneItem = ({ index, children }) => {
    const [, drop] = useDrop({
      accept: ItemType,
      hover: (item) => {
        if (item.index !== index) {
          moveItem(item.index, index);
        }
      },
    });

    return <div ref={drop}>{children}</div>;
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-lg w-[90%] sm:w-[80%] lg:w-[70%] ml-12 relative">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium">Question 1</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Description (optional)"
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <div className="relative">
              <CiImageOn
                size={32}
                className="cursor-pointer text-blue-500"
                onClick={() => document.getElementById("file-input").click()}
              />
              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Categories</label>
          <div className="flex flex-col gap-2 mt-2">
            <DropZoneCategory index={0}>
              {categories.map((category, index) => (
                <DraggableCategory
                  key={index}
                  index={index}
                  category={category}
                />
              ))}
            </DropZoneCategory>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={handleAddCategory}
              placeholder="Add Category"
              className="px-2 py-1 border border-blue-300 rounded-md w-[120px]"
            />
          </div>
        </div>

        <div className="my-4"></div>

        <div className="flex flex-wrap gap-8">
          <div>
            <label className="block text-sm font-medium">Items</label>
            <div className="flex flex-col gap-2 mt-2">
              <DropZoneItem index={0}>
                {items.map((item, index) => (
                  <DraggableItem key={index} index={index} item={item} />
                ))}
              </DropZoneItem>
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={handleAddItem}
                placeholder="Add Item"
                className="px-2 py-1 border border-green-300 rounded-md w-[120px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium">Belongs To</label>
            {items.map((item, index) => (
              <select
                key={index}
                className="relative flex items-center gap-2 px-2 py-1 bg-green-100 border border-green-300 rounded-md w-[120px] mt-1"
                value={selectedCategories[index] || ""}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
              >
                <option value="" disabled>
                  Select a category for {item}
                </option>
                {categories.map((category, catIndex) => (
                  <option key={catIndex} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical icons on the right */}
      <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 flex flex-col gap-2">
        
        <IoIosAddCircleOutline onClick={handleAddCategorize} size={28} className="cursor-pointer"/>
        <CiTrash size={28} className=" cursor-pointer"/>

        
      </div>
    </div>
  );
};

export default Question1;
