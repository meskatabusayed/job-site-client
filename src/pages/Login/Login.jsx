import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";



const Login = () => {
    const {signInUser , signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(" ");
    const [success , setSuccess] = useState('');

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);
        setLoginError('')

        signInUser(email , password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            setSuccess(swal("Good job!", "Login Successfully!", "success"));
            navigate('/');
        })
        .catch(error => {
            console.log(error)
            setLoginError(error.message);
        })


        
        
    }


    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
          console.log(result.user)
          setSuccess(swal("Good job!", "Login Successfully!", "success"));
          navigate('/');
        })
        .catch(error => {
          console.log(error)
        })
      }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-700">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">
          Log in
        </h2>
        <form onSubmit={handleLogIn}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
              placeholder="Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white p-3 rounded hover:bg-indigo-900 transition duration-300"
          >
            Login
          </button>
        </form>
        {
          
          loginError && <p className="text-red-800">{loginError}</p>
          
          }

          {
            success && <p>{success}</p>
          }

        <p className="text-center">New To Please<Link to='/registration'>
      <button className="btn btn-link">Registration</button>
      </Link></p>
      <p className="text-center mb-2"><button onClick={handleGoogleLogIn}  className="btn btn-primary">Login With Google</button></p>
      </div>
    </div>
    );
};

export default Login;