import axios from "axios";
import { useQuery } from "react-query";
import { live_url } from "../../constants/urls";

export const useGetProjects = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  return result;
};

const getProjects = async () => {
  try {
    const res = await axios.get(`${live_url}/projects`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
