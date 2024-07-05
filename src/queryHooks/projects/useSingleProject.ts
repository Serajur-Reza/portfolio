import axios from "axios";
import { useQuery } from "react-query";
import { live_url } from "../../constants/urls";

export const useSingleProject = (id: string) => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["project"],
    queryFn: () => getSingleProject(id),
  });

  return result;
};

const getSingleProject = async (id: string) => {
  try {
    const res = await axios.get(`${live_url}/projects/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
