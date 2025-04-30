"use client";
import { useState } from "react";

const ItemList = ({ items, onEdit, onDelete }) => (
  <table className="w-full bg-white rounded shadow">
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td>
            <img src={item.image} alt={item.title} className="h-10" />
          </td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <button
              onClick={() => onEdit(index)}
              className="bg-green-500 text-white p-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const AddModal = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={() =>
            onSave({ title, description, image: "/images/default.png" })
          }
          className="bg-teal-500 text-white p-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default function Blog() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => setShowModal(true);
  const handleSave = (newItem) => {
    setItems([...items, newItem]);
    setShowModal(false);
  };
  const handleEdit = (index) => {
    // Implement edit logic
  };
  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <button
        onClick={handleAdd}
        className="bg-red-500 text-white p-2 rounded mb-4"
      >
        Add Blog
      </button>
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      {showModal && <AddModal onSave={handleSave} />}
    </div>
  );
}
