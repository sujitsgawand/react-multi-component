import React, {useEffect} from "react";
import axios from "axios";

function Home(props) {

    useEffect(() => {
        axios.get(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
            .then(response => {
                const posts = response.data;
                console.log("response ", response);
                console.log("posts ", posts);
                props.setData(posts);
            });
    }, [])

    return (<div>
        <ul>
            {props.data.map((item, index) => (<li key={index}>{`${item.firstName} ${item.lastName}`}</li>))}
        </ul>
    </div>);
}

export default Home;