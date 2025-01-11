// import React from 'react';
// import { Form, Input, Button, Divider } from 'antd';
// import { Link } from 'react-router-dom';
// import "../../index.css";
// import { RegisterUser } from '../../apicalls/users';
// import { toast } from 'react-toastify';  // Import toast
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { SetLoader } from '../../redux/loadersSlice';


// function Register() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     // const onFinish = async (values) => {
//     //     try {
//     //         const response = await RegisterUser(values);
//     //         if (response.success) {
//     //             message.success(response.message);
//     //         } else {
//     //             throw new Error(response.message);
//     //         }
//     //     } catch (error) {
//     //         message.error(error.message);
//     //     }
//     // };
//     const onFinish = async (values) => {
//         try {
//             dispatch(SetLoader(true))
//             const response = await RegisterUser(values);
//             dispatch(SetLoader(false))

//             if (response.success) {
//                 toast.success(response.message);  // Success toast
//                 navigate("/login");
//             } else {
//                 throw new Error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetLoader(false))
//             toast.error(error.message);  // Error toast
//         }
//     };
//     useEffect(() => {
//         if (localStorage.getItem("token")) {
//             navigate('/');
//         }
//     }, []);
//     // useEffect(() => {
//     //     if (localStorage.getItem("token")) {
//     //         navigate('/');
//     //     }
//     // }, [navigate]);

//     return (
//         <div className="h-screen bg-green-600 flex justify-center items-center">
//             <div className="bg-white p-5 rounded w-[450px] shadow-md">
//                 <h1 className="text-center text-2xl font-bold text-primary mb-3">
//                     Register
//                 </h1>
//                 <Divider />

//                 <Form layout="vertical" onFinish={onFinish}>
//                     <Form.Item
//                         label="Name"
//                         name="name"
//                         rules={[{ required: true, message: 'Please input your name!' }]}
//                     >
//                         <Input placeholder="Name" />
//                     </Form.Item>

//                     <Form.Item
//                         label="Email"
//                         name="email"
//                         rules={[
//                             { required: true, message: 'Please input your email!' },
//                             { type: 'email', message: 'Please enter a valid email address!' },
//                         ]}
//                     >
//                         <Input placeholder="Email" />
//                     </Form.Item>

//                     <Form.Item
//                         label="Password"
//                         name="password"
//                         rules={[
//                             { required: true, message: 'Please input your password!' },
//                             { min: 6, message: 'Password must be at least 6 characters!' },
//                         ]}
//                     >
//                         <Input.Password placeholder="Password" />
//                     </Form.Item>

//                     <Form.Item>
//                         <Button type="primary" htmlType="submit" className="w-full mt-2" block>
//                             Register
//                         </Button>
//                     </Form.Item>

//                     <div className="mt-5 text-center">
//                         <span className="text-gray-500">
//                             Already have an account?{' '}
//                             <Link to="/login" className="text-primary">
//                                 Login
//                             </Link>
//                         </span>
//                     </div>
//                 </Form>
//             </div>
//         </div>
//     );
// };

// export default Register;
import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import "../../index.css";
import { RegisterUser } from '../../apicalls/users';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetLoader } from '../../redux/loadersSlice';



function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            dispatch(SetLoader(true)); // Show loader
            const response = await RegisterUser(values);
            dispatch(SetLoader(false)); // Hide loader

            if (response.success) {
                toast.success(response.message, {
                    autoClose: 3000, // Auto-close after 3 seconds
                });
                navigate("/login");
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            dispatch(SetLoader(false)); // Hide loader
            toast.error(error.message, {
                autoClose: 3000, // Auto-close after 3 seconds
            });
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="h-screen bg-[#f8e9c8] flex justify-center items-center">
            <div className="bg-white p-5 rounded w-[450px] shadow-md text-right">
                <h1 className="text-center text-2xl font-bold text-primary mb-3">
                    تسجيل
                </h1>
                <Divider />

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="الاسم"
                        name="name"
                        rules={[{ required: true, message: 'يرجى إدخال الاسم!' }]}
                    >
                        <Input placeholder="الاسم" />
                    </Form.Item>

                    <Form.Item
                        label="البريد الإلكتروني"
                        name="email"
                        rules={[
                            { required: true, message: 'يرجى إدخال البريد الإلكتروني!' },
                            { type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح!' },
                        ]}
                    >
                        <Input placeholder="البريد الإلكتروني" />
                    </Form.Item>

                    <Form.Item
                        label="كلمة المرور"
                        name="password"
                        rules={[
                            { required: true, message: 'يرجى إدخال كلمة المرور!' },
                            { min: 6, message: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل!' },
                        ]}
                    >
                        <Input.Password placeholder="كلمة المرور" />
                    </Form.Item>

                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="w-full mt-2 " block>
                            تسجيل
                        </Button>
                    </Form.Item>

                    <div className="mt-5 text-center">
                        <span className="text-gray-500">
                            لديك حساب بالفعل؟{' '}
                            <Link to="/login" className="text-primary">
                                تسجيل الدخول
                            </Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
