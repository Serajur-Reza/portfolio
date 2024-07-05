import axios from "axios";
import { useQuery } from "react-query";
import { live_url } from "../../constants/urls";

export const useSingleBlog = (id: string) => {
  const result = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getSingleBlog(id),
  });

  return result;
};

const getSingleBlog = async (id: string) => {
  try {
    const res = await axios.get(`${live_url}/blogs/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
