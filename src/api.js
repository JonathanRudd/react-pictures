import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wx3adSraN58Cz3buhLzRze_x6EXHhpyDmCX-T9RASBg",
    },
    params: {
      query: { term },
    },
  });

  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
