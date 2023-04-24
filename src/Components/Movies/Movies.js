import React, { useEffect, useState } from "react";
import axios from "axios";

export const Movies = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${fetchUrl}`).then((response) => {
      setMovies(response.data.results);
    });
  });

  return <div>Movies</div>;
};
