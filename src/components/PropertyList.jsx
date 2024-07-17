import React, { useState, useEffect } from "react";
import RImage from "../images/1.png";
import R1Image from "../images/2.png";
import R2Image from "../images/3.png";
import R3Image from "../images/4.jpg";
import R4Image from "../images/5.jpg";
import R5Image from "../images/6.jpg";
import R6Image from "../images/7.png";
import R7Image from "../images/8.png";
import R8Image from "../images/9.png";
import "../views/property.css";


const PropertyList = ({ isDarkMode }) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    zone: "",
    saleType: "",
  });
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    
    const initialProperties = [
      {
        id: 1,
        name: "Beautiful House",
        price: 500000,
        zone: "Chicago",
        saleType: "For Sale",
        imageUrl: RImage,
      },
      {
        id: 2,
        name: "Cozy House",
        price: 7000,
        zone: "Miami",
        saleType: "For Rent",
        imageUrl: R1Image,
      },
      {
        id: 3,
        name: "Modern Condo",
        price: 300000,
        zone: "New York",
        saleType: "For Sale",
        imageUrl: R2Image,
      },
      {
        id: 4,
        name: "Spacious Villa",
        price: 1200000,
        zone: "Los Angeles",
        saleType: "For Sale",
        imageUrl: R3Image,
      },
      {
        id: 5,
        name: "Cozy Cottage",
        price: 6000,
        zone: "Ohio",
        saleType: "For Rent",
        imageUrl: R4Image,
      },
      {
        id: 6,
        name: "Exclusive Property",
        price: 900000,
        zone: "Miami",
        saleType: "For Sale",
        imageUrl: R5Image,
      },
      {
        id: 7,
        name: "Mountain View Retreat",
        price: 400000,
        zone: "Colorado",
        saleType: "For Sale",
        imageUrl: R7Image,
      },
      {
        id: 8,
        name: "City Loft",
        price: 4000,
        zone: "San Francisco",
        saleType: "For Rent",
        imageUrl: R6Image,
      },
      {
        id: 9,
        name: "Riverside Cabin",
        price: 250000,
        zone: "Oregon",
        saleType: "For Sale",
        imageUrl: R8Image,
      },
    ];

    setProperties(initialProperties);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredProperties = properties.filter((property) => {
      const meetsPriceCriteria =
        (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
        (!filters.maxPrice || property.price <= parseInt(filters.maxPrice));
      const meetsZoneCriteria = !filters.zone || property.zone === filters.zone;
      const meetsSaleTypeCriteria =
        !filters.saleType || property.saleType === filters.saleType;
      return meetsPriceCriteria && meetsZoneCriteria && meetsSaleTypeCriteria;
    });

    setProperties(filteredProperties);
  };

  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <>
    
      <div className={`filters ${themeClass}`}>
        <input
          className={`input ${themeClass}`}
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          className={`input ${themeClass}`}
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <input
          className={`input ${themeClass}`}
          type="text"
          name="zone"
          placeholder="Zone"
          value={filters.zone}
          onChange={handleFilterChange}
        />
        <input
          className={`input ${themeClass}`}
          type="text"
          name="saleType"
          placeholder="Sale Type"
          value={filters.saleType}
          onChange={handleFilterChange}
        />
        <button className={`button ${themeClass}`} onClick={applyFilters}>
          Apply 🔍
        </button>
      </div>

      <div className={`property-container ${themeClass}`}>
        {properties.map((property) => (
          <div className={`property-card ${themeClass}`} key={property.id}>
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-img"
            />
            <div className={`property-info ${themeClass}`}>
              <h1 className={`text ${themeClass}`}>{property.name}</h1>
              <p className={`text ${themeClass}`}>${property.price}</p>
              <p className={`text ${themeClass}`}>{property.zone}</p>
              <p className={`text ${themeClass}`}>{property.saleType}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyList;
