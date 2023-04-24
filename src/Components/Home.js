import React from "react";
import { Movies } from "./Movies/Movies";
import api from "../api/api";

export const Home = () => {
  return (
    <>
      <Movies title="NETFLIX ORIGINALS" fetchUrl={api.fetchPopular} />
      {/* <Movies title="TOP RATED" fetchUrl={api.fetchTopRated} />
      <Movies title="TRENDING NOW" fetchUrl={api.fetchTrending} />
      <Movies title="HORROR MOVIES" fetchUrl={api.fetchHorror} />
      <Movies title="UPCOMING MOVIES" fetchUrl={api.fetchUpcoming} /> */}
    </>
  );
};
