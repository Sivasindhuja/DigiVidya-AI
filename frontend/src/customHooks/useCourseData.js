import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseData } from '../redux/courseSlice';
import { serverUrl } from '../App';

const useCourseData = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user?.userData);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // For students, always fetch published courses
        // For educators, this hook won't be the primary source (useCreatorCourseData is)
        const endpoint = '/api/course/getpublishedcourses';

        const result = await axios.get(serverUrl + endpoint, { withCredentials: true });
        dispatch(setCourseData(result.data));
      } catch (error) {
        console.log(error);
      }
    };

    if (userData) {
      fetchCourses();
    }
  }, [userData, dispatch]);
};

export default useCourseData;
