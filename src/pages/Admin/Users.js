
// import { Table } from 'antd';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { SetLoader } from '../../redux/loadersSlice';
// import { GetAllUsers, UpdateUserStatus } from '../../apicalls/users';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import moment from 'moment';

// function Users() {
//     const [users, setUsers] = React.useState([]);
//     const dispatch = useDispatch();

//     // Fetch all users from the backend
//     const getData = async () => {
//         try {
//             dispatch(SetLoader(true));
//             const response = await GetAllUsers();
//             dispatch(SetLoader(false));
//             console.log("Fetched users:", response.data); // Debug log
//             if (response.success) {
//                 setUsers(response.data);
//             } else {
//                 toast.error('Failed to fetch users');
//             }
//         } catch (error) {
//             dispatch(SetLoader(false));
//             console.error(error); // Debug log
//             toast.error(error.message || 'An error occurred while fetching users');
//         }
//     };

//     // Update user status
//     const onStatusUpdate = async (id, status) => {
//         try {
//             console.log("Updating user:", id, "to status:", status); // Debug log
//             dispatch(SetLoader(true));
//             const response = await UpdateUserStatus(id, status);
//             dispatch(SetLoader(false));
//             console.log("Update response:", response); // Debug log
//             if (response.success) {
//                 toast.success(response.message);
//                 getData(); // Refresh the user list
//             } else {
//                 throw new Error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetLoader(false));
//             console.error(error); // Debug log
//             toast.error(error.message || 'Failed to update user status');
//         }
//     };

//     // Table columns for displaying user data
//     const columns = [
//         { title: 'Name', dataIndex: 'name' },
//         { title: 'Email', dataIndex: 'email' },
//         {
//             title: 'Role',
//             dataIndex: 'role',
//             render: (text) => text?.toUpperCase() || 'N/A',
//         },
//         {
//             title: 'Created At',
//             dataIndex: 'createdAt',
//             render: (text, record) => moment(record.createdAt).format('DD/MM/YYYY hh:mm:ss A'),
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             render: (text, record) => record.status.toUpperCase(),
//         },
//         {
//             title: 'Action',
//             dataIndex: 'action',
//             render: (text, record) => {
//                 const { status, _id } = record;
//                 return (
//                     <div className="flex gap-5">
//                         {status === 'active' && (
//                             <span
//                                 className="underline cursor-pointer text-blue-500"
//                                 onClick={() => onStatusUpdate(_id, 'blocked')}
//                             >
//                                 Block
//                             </span>
//                         )}
//                         {status === 'blocked' && (
//                             <span
//                                 className="underline cursor-pointer text-blue-500"
//                                 onClick={() => onStatusUpdate(_id, 'active')}
//                             >
//                                 Unblock
//                             </span>
//                         )}
//                     </div>
//                 );
//             },
//         },
//     ];

//     // Fetch users on component mount
//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div>
//             {users.length > 0 ? (
//                 <Table columns={columns} dataSource={users} rowKey="_id" />
//             ) : (
//                 <div>No users available</div>
//             )}
//             <ToastContainer />
//         </div>
//     );
// }

// export default Users;

import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetLoader } from '../../redux/loadersSlice';
import { GetAllUsers, UpdateUserStatus } from '../../apicalls/users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

function Users() {
    const [users, setUsers] = React.useState([]);
    const dispatch = useDispatch();

    // جلب جميع المستخدمين من الخادم
    const getData = async () => {
        try {
            dispatch(SetLoader(true));
            const response = await GetAllUsers();
            dispatch(SetLoader(false));
            console.log("تم جلب المستخدمين:", response.data); // سجل تصحيح
            if (response.success) {
                setUsers(response.data);
            } else {
                toast.error('فشل في جلب المستخدمين', {
                    autoClose: 3000, // Auto-close after 3 seconds
                  });
            }
        } catch (error) {
            dispatch(SetLoader(false));
            console.error(error); // سجل تصحيح
            toast.error(error.message || 'حدث خطأ أثناء جلب المستخدمين', {
                autoClose: 3000, // Auto-close after 3 seconds
              });
        }
    };

    // تحديث حالة المستخدم
    const onStatusUpdate = async (id, status) => {
        try {
            console.log("تحديث المستخدم:", id, "إلى الحالة:", status); // سجل تصحيح
            dispatch(SetLoader(true));
            const response = await UpdateUserStatus(id, status);
            dispatch(SetLoader(false));
            console.log("استجابة التحديث:", response); // سجل تصحيح
            if (response.success) {
                toast.success(response.message, {
                    autoClose: 3000, // Auto-close after 3 seconds
                  });
                getData(); // تحديث قائمة المستخدمين
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            dispatch(SetLoader(false));
            console.error(error); // سجل تصحيح
            toast.error(error.message || 'فشل في تحديث حالة المستخدم', {
                autoClose: 3000, // Auto-close after 3 seconds
              });
        }
    };

    // الأعمدة لعرض بيانات المستخدم
    const columns = [
        { title: 'الاسم', dataIndex: 'name' },
        { title: 'البريد الإلكتروني', dataIndex: 'email' },
        {
            title: 'الدور',
            dataIndex: 'role',
            render: (text) => text?.toUpperCase() || 'غير متوفر',
        },
        {
            title: 'تاريخ الإنشاء',
            dataIndex: 'createdAt',
            render: (text, record) => moment(record.createdAt).format('DD/MM/YYYY hh:mm:ss A'),
        },
        {
            title: 'الحالة',
            dataIndex: 'status',
            render: (text, record) => record.status.toUpperCase(),
        },
        {
            title: 'الإجراء',
            dataIndex: 'action',
            render: (text, record) => {
                const { status, _id } = record;
                return (
                    <div className="flex gap-5">
                        {status === 'active' && (
                            <span
                                className="underline cursor-pointer text-blue-500"
                                onClick={() => onStatusUpdate(_id, 'blocked')}
                            >
                                حظر
                            </span>
                        )}
                        {status === 'blocked' && (
                            <span
                                className="underline cursor-pointer text-blue-500"
                                onClick={() => onStatusUpdate(_id, 'active')}
                            >
                                إلغاء الحظر
                            </span>
                        )}
                    </div>
                );
            },
        },
    ];

    // جلب المستخدمين عند تحميل المكون
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {users.length > 0 ? (
                <Table columns={columns} dataSource={users} rowKey="_id" />
            ) : (
                <div>لا توجد مستخدمين متاحين</div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Users;
