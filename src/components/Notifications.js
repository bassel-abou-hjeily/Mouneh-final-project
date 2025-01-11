// // // // import React from 'react'

// // // // function notifications({
// // // //     notifications = [],
// // // //     reloadNotifications,
// // // //     showNotifications,
// // // //     setShowNotifications,
// // // // }) {
// // // //     return (
// // // //         <Model
// // // //             title="Notifications"
// // // //             open={showNotifications}
// // // //             onCancel={() => setShowNotifications(false)}
// // // //             footer={null}
// // // //             centered
// // // //             width={1000}
// // // //         >
// // // //             <div className='flex flex-col gap-2'>
// // // //               (notifications.map((notification) => {
// // // //                     <div className='flex flex-col gap-2 items-center border border-solid p-2'>
// // // //                         <h1>
// // // //                             {notification.title}
// // // //                         </h1>
// // // //                         <Divider />
// // // //                         <span>
// // // //                             {notifications.message}
// // // //                         </span>
// // // //                     </div>
// // // //                 }))
// // // //             </div>
// // // //         </Model>
// // // //     )
// // // // }

// // // // export default notifications
// // // import React from 'react';
// // // import { Modal, Divider } from 'antd'; // Ensure proper imports for Modal and Divider
// // // import { useNavigate } from 'react-router-dom';

// // // function Notifications({
// // //     notifications = [],
// // //     reloadNotifications,
// // //     showNotifications,
// // //     setShowNotifications,
// // // }) {
// // //     const navigate = useNavigate();
// // //     return (
// // //         <Modal
// // //             title="Notifications"
// // //             open={showNotifications}
// // //             onCancel={() => setShowNotifications(false)}
// // //             footer={null}
// // //             centered
// // //             width={1000}
// // //         >
// // //             <div className="flex flex-col gap-2">
// // //                 {notifications.map((notification) => (
// // //                     <div key={notification._id} onClick={() => {
// // //                         navigate(notification.onClick);
// // //                         reloadNotifications();
// // //                     }} className="flex flex-col  border-gray-300 rounded border border-solid p-2 cursor-pointer">
// // //                         <h1 className='text-gray-700'>{notification.title}</h1>
// // //                         <Divider />
// // //                         <span className='text-gray-500'>{notification.message}</span>
// // //                         <spsn> the moment the notification createdAt.from now</spsn>
// // //                          <div> icon to delete the notification<div></div>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </Modal>
// // //     );
// // // }

// // // export default Notifications;
// // import React from 'react';
// // import { Modal, Divider, Button } from 'antd'; // Ensure proper imports for Modal, Divider, and Button
// // import { useNavigate } from 'react-router-dom';
// // import moment from 'moment'; // Import moment.js for formatting dates

// // function Notifications({
// //     notifications = [],
// //     reloadNotifications,
// //     showNotifications,
// //     setShowNotifications,
// // }) {
// //     const navigate = useNavigate();

// //     return (
// //         <Modal
// //             title="Notifications"
// //             open={showNotifications}
// //             onCancel={() => setShowNotifications(false)}
// //             footer={null}
// //             centered
// //             width={800}
// //         >
// //             <div className="flex flex-col gap-4">
// //                 {notifications.length === 0 ? (
// //                     <div className="text-gray-500 text-center">No notifications available.</div>
// //                 ) : (
// //                     notifications.map((notification) => (
// //                         <div
// //                             key={notification._id}
// //                             onClick={() => {
// //                                 navigate(notification.onClick);
// //                                 reloadNotifications();
// //                             }}
// //                             className="flex flex-col border-gray-300 rounded border border-solid p-3 cursor-pointer hover:shadow-md"
// //                         >
// //                             <h1 className="text-gray-700 font-medium">{notification.title}</h1>
// //                             <Divider />
// //                             <span className="text-gray-500">{notification.message}</span>
// //                             <div className="text-gray-400 text-sm mt-2">
// //                                 {moment(notification.createdAt).fromNow()}
// //                             </div>
// //                             <Button
// //                                 type="link"
// //                                 danger
// //                                 onClick={(e) => {
// //                                     e.stopPropagation(); // Prevent triggering the parent onClick
// //                                     // Call delete notification API or handle deletion logic here
// //                                     console.log(`Delete notification ID: ${notification._id}`);
// //                                 }}
// //                             >
// //                                 Delete
// //                             </Button>
// //                         </div>
// //                     ))
// //                 )}
// //             </div>
// //         </Modal>
// //     );
// // }

// // export default Notifications;
// import React from 'react';
// import { Modal } from 'antd'; // Proper imports
// import { useNavigate } from 'react-router-dom';
// import moment from 'moment';
// import { toast } from 'react-toastify';
// import Divider from './Divider'
// function Notifications({
//     notifications = [],
//     reloadNotifications,
//     showNotifications,
//     setShowNotifications,
// }) {
//     const navigate = useNavigate();

//     // const handleNotificationClick = (notification) => {
//     //     try {
//     //         navigate(notification.onClick);
//     //         reloadNotifications(); // Ensure the reload doesn't loop back to trigger another toast
//     //         toast.success('تم عرض الإشعار بنجاح', { autoClose: 2000 }); // Set autoClose to avoid prolonged interactions
//     //     } catch (error) {
//     //         toast.error('حدث خطأ أثناء عرض الإشعار.', { autoClose: 2000 });
//     //     }
//     // };

//     // const handleDeleteNotification = (e, notificationId) => {
//     //     e.stopPropagation(); // Prevent triggering the parent `onClick`
//     //     try {
//     //         // Mock delete logic (Replace with actual API call)
//     //         console.log(`Delete notification ID: ${notificationId}`);
//     //         toast.success('تم حذف الإشعار بنجاح', { autoClose: 2000 });
//     //     } catch (error) {
//     //         toast.error('حدث خطأ أثناء حذف الإشعار.', { autoClose: 2000 });
//     //     }
//     // };

//     return (
//         <Modal
//             title="الإشعارات"
//             open={showNotifications}
//             onCancel={() => setShowNotifications(false)}
//             footer={null}
//             centered
//             width={1000}
//         >
//             <div className="flex flex-col gap-4">

//                 {notifications.map((notification) => (
//                     <div className='flex  flex-col gap-2 items-center border border-solid p-2'>
//                         <h1>{notification.title}</h1>
//                         <Divider />
//                         <span>
//                             {notification.message}
//                         </span>
//                     </div>
//                 ))
//                 }
//             </div>
//         </Modal>
//     );
// }

// export default Notifications;
import React from 'react';
import { message, Modal } from 'antd'; // Proper imports
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';
import Divider from './Divider';
import { DeleteNotification } from '../apicalls/notifications';
import { useDispatch } from 'react-redux';
import { SetLoader } from '../redux/loadersSlice';

function Notifications({
    notifications = [],
    reloadNotifications,
    showNotifications,
    setShowNotifications,
}) {
    // const [notifications = [], setNotifications] = useState([]);
    //  const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteNotification = async (id) => {
        try {
            dispatch(SetLoader(true));
            const response = await DeleteNotification(id);
            dispatch(SetLoader(false));
            if (response.success) {
                message.success(response.message);
                reloadNotifications();
            } else {
                throw new Error(response.message)
            }
        
        } catch (error) {
            dispatch(SetLoader(false));
            message.error(error.message);
        }
    };

    return (
        <Modal
            title="الإشعارات"
            open={showNotifications}
            onCancel={() => setShowNotifications(false)}
            footer={null}
            centered
            width={1000}
        >
            <div className="flex flex-col gap-4">
                {notifications.map((notification) => (
                    <div className='flex flex-col gap-2 items-center border border-solid cursor-pointer border-gray-300 rounded p-2'
                        key={notification._id}
                    >
                        <div className='flex justify-between items-center'>
                            <div     onClick={() => {
                            navigate(notification.onClick)
                            setShowNotifications(false);
                        }}>
                        <h1 className='text-gray-700'>{notification.title}</h1>
                        <Divider />
                        <span className='text-gray-500'>
                            {notification.message}
                                </span>
                                <h1 className='text-gray-400 text-sm'>(moment.{notification.createdAt}.fromNow())</h1>
                            </div>
                            <i
                                className='ri-delete-bin-line'
                                onClick={() => {
                                    deleteNotification(notification._id);
                                }}></i>
                            </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
}

export default Notifications;
