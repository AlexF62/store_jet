import { CategoryService } from '@/services/category.service';
import { useQuery } from '@tanstack/react-query';

const useCategory = () => {
  const queryKey = ['repoData'];

  const queryFn = async () => {
    const response = await CategoryService.getAll();
    return response.data;
  };

  return useQuery({
    queryKey: queryKey, 
    queryFn: queryFn,
  });
};

export default useCategory;









