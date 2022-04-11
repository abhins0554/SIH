import React, { useState } from 'react';

import service from '../Service/service';

function index(props) {
    const [user, set_user] = useState([]);
    React.useEffect(() => {
        service._get_all_user()
            .then(response => {
                if (response?.data?.message === " Successful") {
                    set_user(response.data.result);
                }
            })
            .catch(error => {
                console.log("error", error);
            })
    }, []);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">State</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">Aadhaar Number</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((item, index) => {
                        return (
                            <tr id={item?._id}>
                                <th scope="col">{index + 1}</th>
                                <th scope="col">{item?.name}</th>
                                <th scope="col">{item?.email}</th>
                                <th scope="col">{item?.mobile}</th>
                                <th scope="col">{item?.state}</th>
                                <th scope="col">{item?.pincode}</th>
                                <th scope="col">{item?.adhaar_number}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default index;