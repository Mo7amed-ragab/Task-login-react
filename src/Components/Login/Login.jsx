import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setClicked, setSuccess, updateField } from '../../Redux/loginSlice';
import { ColorRing } from 'react-loader-spinner';
import * as yup from 'yup';

export default function Login() {
    const dispatch = useDispatch();
    const { email, password, isClicked, isSuccess } = useSelector(
        (state) => state.form
    );

    const LoginFormik = useFormik({
        initialValues: { email, password },
        onSubmit: (value) => {
            dispatch(setClicked(true));
            setTimeout(() => {
                dispatch(setClicked(false));
                dispatch(setSuccess(true));
                console.log('Login successful!', value);
            }, 2000);
        },
        validationSchema: yup.object().shape({
            email: yup.string().required().email('Invalid Email'),
            password: yup.string().required().min(6).max(12),
        }),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateField({ name, value }));
        LoginFormik.handleChange(e);
    };

    return (
        <>
            <div className="p-5 ">
                {isSuccess ? (
                    <div
                        className="p-4 mb-4 text-center text-sm text-green-400 rounded-lg bg-red-50 dark:text-red-400"
                        role="alert"
                    >
                        Welcome Back{' '}
                    </div>
                ) : (
                    ''
                )}
                <h2 className="text-center p-3">Login Now :</h2>
                <form
                    onSubmit={LoginFormik.handleSubmit}
                    className="max-w-md mx-auto border-blue-500 border-2 rounded-lg p-5"
                >
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            value={LoginFormik.values.email}
                            onBlur={LoginFormik.handleBlur}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email :
                        </label>
                        {LoginFormik.errors.email && LoginFormik.touched.email ? (
                            <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                                role="alert"
                            >
                                {LoginFormik.errors.email}{' '}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            value={LoginFormik.values.password}
                            onBlur={LoginFormik.handleBlur}
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password :
                        </label>
                        {LoginFormik.errors.password && LoginFormik.touched.password ? (
                            <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                                role="alert"
                            >
                                {LoginFormik.errors.password}{' '}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {!isClicked ? (
                            'Login'
                        ) : (
                            <ColorRing
                                visible={true}
                                height="40"
                                width="40"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                            />
                        )}
                    </button>
                </form>
            </div>
        </>
    );
}
