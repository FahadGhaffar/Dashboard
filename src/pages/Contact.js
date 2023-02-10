
import { Link } from "react-router-dom";


import SignupForm from "../component/SignUpForm/Signup";
import axios from "axios";
import { URL } from "../component/config/Api";

const Contact = () => {
    const signup = (values) => {
        console.log(values)
        // var config = {
        //     method: 'post',
        //     url: `${URL}/api/users`,
        //     data: values
        // };
        // axios(config)
        //     .then((res) => {
        //         console.log("res--->", res)
        //     })
        //     .catch(err => console.log("err", err.response.data))
    }
    return (
        <div className="container">
            <div className="full-height row justify-content-center">
                <div className="col-6">
                    <SignupForm signup={signup} />
                </div>
            </div>
        </div>
    )
}

export default Contact