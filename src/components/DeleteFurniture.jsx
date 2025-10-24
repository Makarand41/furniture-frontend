import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteFurniture = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = async () => {
      const confirm = window.confirm("Are you sure you want to delete this furniture?");
      if (confirm) {
        await axios.delete(`http://localhost:8081/api/furniture/delete/${id}`);
        alert("Furniture deleted successfully!");
        navigate("/furniture/list");
      } else {
        navigate("/furniture/list");
      }
    };
    confirmDelete();
  }, [id, navigate]);

  return <div>Deleting furniture...</div>;
};

export default DeleteFurniture;
