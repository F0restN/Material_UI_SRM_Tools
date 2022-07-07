import React, {useEffect, useState} from 'react';
import CourseFetch from "./hooks/CourseFetch";
import store from "../../store/store";
import CourseTable from "./components/CourseTable";

function TemplatePlanner(props) {
    const authenticationStatus = store.getState()
    const fetchConfig = {
        headers: {'Authorization': `Bearer ${authenticationStatus.jwtToken}`}
    }
    const [courses, setCourses] = useState([])
    const [initFlag, setInitFlag] = useState(false)

    useEffect(() => {
        async function initialization() {
            let [courseLoading, courseError, courseData] = await CourseFetch({}, fetchConfig)
            setCourses(courseData)
        }

        initialization().then((e) => {
            setInitFlag(true)
        })
    }, [])

    return (
        <div>
            {
                initFlag === true
                ?
                <CourseTable data={courses}/>

                :
                <div></div>
            }
        </div>
    );
}

export default TemplatePlanner;