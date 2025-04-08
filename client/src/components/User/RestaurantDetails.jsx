import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../assets/css/UserCSS/RestaurantDetails.css";
import Footer from "./UserFooter";
import api from "../../services/api";

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const res = await api.get(`/api/restaurants/${id}`);
        setRestaurant(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
        setError("Failed to load restaurant details");
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  // ... existing code ...
}; 