import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const extractCoordinates = (url) => {
  if (!url) {
    console.error("Invalid URL provided");
    return null;
  }
  const match = url.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (match) {
    return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
  }
  return null;
};

const MapComponent = ({ mapLink }) => {
  useEffect(() => {
    // Check if the map container exists and reset it if necessary
    if (L.DomUtil.get("map") !== null) {
      L.DomUtil.get("map")._leaflet_id = null; // Reset map instance
    }

    const coordinates = extractCoordinates(mapLink);
    var map = L.map("map").setView([coordinates.lat, coordinates.lng], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.circle([coordinates.lat, coordinates.lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(map);

    L.marker([coordinates.lat, coordinates.lng])
      .addTo(map)
      .bindPopup("Someone reported!!")
      .openPopup();

    return () => {
      map.remove(); // Clean up the map instance on component unmount
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "70%",
        margin: "0",
        bottom: "0px",
        alignSelf: "center",
        border: "1px solid black",
      }}
    />
  );
};

export default MapComponent;
