// // // // import { Model } from 'mongoose'
// // // // import React from 'react'
// // // // import { useDispatch } from 'react-redux';
// // // // import { GetAllOrders } from '../../apicalls/products';

// // // // function Orders(
// // // //     showOrderssModel,
// // // //     setshowOrdersModel,
// // // //     selectedProduct
// // // // ) {
// // // //     const [OrdersData, setOrdersData] = React.useState([]);
// // // //     const dispatch = useDispatch();
// // // //     const getData = async () => {
// // // //         try {
// // // //             dispatch(SetLoader(true));
// // // //             const response = await GetAllOrders{
// // // //                 product: selectedProduct._id,

// // // //             };
// // // //             dispatch(SetLoader(false));
// // // //             if (response.success) {
// // // //                 setOrdersData(response.data);

// // // //             }

// // // //         } catch (error) {
// // // //             dispatch(setLoader(false));
// // // //             toast.error(error.message)
// // // //         }
// // // //     };
// // // //     const columns = [
// // // //         {
// // // //             title: "Name",
// // // //             dataIndex:"name"
// // // //         },
// // // //         {
// // // //             title: "Quantity",  
// // // //             dataIndex:"quantity"
// // // //         },
// // // //         {
// // // //             title: "Order Date",
// // // //             dataIndex: "CreatedAt",
// // // //             render: (text, record) => {
// // // //                 return moment(text).format("MMMM DD YYYY ,h mm ss");
// // // //             }
// // // //         },
// // // //         {
// // // //             title: "note",
// // // //             dataIndex:"note",
// // // //         }, {
// // // //             title: "Contact details"
// // // //             dataIndex: "Contact details"
// // // //             render: (text, record) => {
// // // //                 return (
// // // //                     <div>
// // // //                         <p>Phone: {record.phone}</p>
// // // //                         <p>Email:{record.buyer.Email}</p>
// // // //                     </div>
// // // //                 )
// // // //             }
// // // //         }
// // // //     ]
// // // //   return (
// // // //       <Model title="Orders"
// // // //           open={showOrderssModel}
// // // //           oncancel={() => setshowOrdersModel(false)}
// // // //           centered
// // // //           width={800}
// // // //       >
// // // //           <h1>
// // // //               productName :{selectedProduct.name}</h1>
// // // //           </Model >
// // // //   )
// // // // }

// // // // export default Orders
// // // import { Divider, Modal, Table } from 'antd';
// // // import React from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { SetLoader } from '../../redux/loadersSlice';
// // // import { GetAllOrders } from '../../apicalls/products';
// // // import { toast } from 'react-toastify';
// // // import moment from 'moment';

// // // function Orders({ showOrdersModel, setShowOrdersModel, selectedProduct }) {
// // //     const [ordersData, setOrdersData] = React.useState([]);
// // //     const dispatch = useDispatch();

// // //     // Fetching order data for the selected product
// // //     const getData = async () => {
// // //         try {
// // //             dispatch(SetLoader(true));
// // //             const response = await GetAllOrders({
// // //                 product: selectedProduct._id,
// // //             });
// // //             dispatch(SetLoader(false));
// // //             if (response.success) {
// // //                 setOrdersData(response.data);
// // //             } else {
// // //                 toast.error(response.message);
// // //             }
// // //         } catch (error) {
// // //             dispatch(SetLoader(false));
// // //             toast.error(error.message);
// // //         }
// // //     };

// // //     // Columns for displaying orders
// // //     const columns = [
// // //         {
// // //             title: "Name",
// // //             dataIndex: "name",
// // //         },
// // //         {
// // //             title: "Quantity",
// // //             dataIndex: "quantity",
// // //         },
// // //         {
// // //             title: "Order Date",
// // //             dataIndex: "createdAt",
// // //             render: (text) => moment(text).format("MMMM DD YYYY, h:mm:ss A"),
// // //         },
// // //         {
// // //             title: "Note",
// // //             dataIndex: "note",
// // //         },
// // //         {
// // //             title: "Contact Details",
// // //             dataIndex: "contactDetails",
// // //             render: (text, record) => (
// // //                 <div>
// // //                     <p>Phone: {record.phone}</p>
// // //                     <p>Email: {record.buyer?.email}</p>
// // //                 </div>
// // //             ),
// // //         },
// // //     ];

// // //     // Fetch orders when the modal opens
// // //     React.useEffect(() => {
// // //         if (showOrdersModel) {
// // //             getData();
// // //         }
// // //     }, [showOrdersModel, selectedProduct]);

// // //     return (
// // //         <Modal
// // //             title="Orders"
// // //             open={showOrdersModel}
// // //             onCancel={() => setShowOrdersModel(false)}
// // //             centered
// // //             width={800}
// // //         >  <h1 className='text-xl'>Orders</h1>
// // //             <Divider/>
// // //             <h1 className='text-xl text-gray-500'>Product Name: {selectedProduct.name}</h1>
// // //             <Table
// // //                 columns={columns}
// // //                 dataSource={ordersData}
// // //                 rowKey="_id"
// // //                 pagination={false}
// // //             />
// // //         </Modal>
// // //     );
// // // }

// // // export default Orders;
// // import { Divider, Modal, Table } from 'antd';
// // import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { SetLoader } from '../../redux/loadersSlice';
// // import { GetAllOrders } from '../../apicalls/products';
// // import { toast } from 'react-toastify';
// // import moment from 'moment';

// // function Orders({ showOrdersModel, setShowOrdersModel, selectedProduct }) {
// //     const [ordersData, setOrdersData] = React.useState([]);
// //     const dispatch = useDispatch();

// //     // Fetch orders data for the selected product
// //     const getData = async () => {
// //         try {
// //             dispatch(SetLoader(true));
// //             const response = await GetAllOrders({
// //                 product: selectedProduct._id, // Ensure the selectedProduct ID is passed
// //             });
// //             dispatch(SetLoader(false));
// //             if (response.success) {
// //                 setOrdersData(response.data);
// //             } else {
// //                 toast.error(response.message);
// //             }
// //         } catch (error) {
// //             dispatch(SetLoader(false));
// //             toast.error(error.message);
// //         }
// //     };

// //     React.useEffect(() => {
// //         if (selectedProduct) {
// //             getData();
// //         }
// //     }, [selectedProduct]);

// //     const columns = [
// //         { title: 'Name', dataIndex: 'buyer' },
// //         { title: 'Quantity', dataIndex: 'quantity' },
// //         {
// //             title: 'Order Date',
// //             dataIndex: 'createdAt',
// //             render: (text) => moment(text).format('MMMM DD YYYY, h:mm:ss A'),
// //         },
// //         { title: 'Note', dataIndex: 'note' },
// //         {
// //             title: 'Contact Details',
// //             dataIndex: 'contactDetails',
// //             render: (text, record) => (
// //                 <div>
// //                     <p>Phone: {record.phoneNumber}</p>
// //                     <p>Email: {record.buyer?.email}</p>
// //                 </div>
// //             ),
// //         },
// //     ];

// //     return (
// //         <Modal
// //             title="Orders"
// //             open={showOrdersModel}
// //             onCancel={() => setShowOrdersModel(false)}
// //             centered
// //             width={1500}
// //             footer={null}
// //         >
// //             <Divider />
// //             <h1 className="text-xl text-gray-500">
// //                 Product Name: {selectedProduct?.name}
// //             </h1>
// //             <Table
// //                 columns={columns}
// //                 dataSource={ordersData}
// //                 rowKey="_id"
// //                 pagination={false}
// //             />
// //         </Modal>
// //     );
// // }

// // export default Orders;
// import { Divider, Modal, Table } from 'antd';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { SetLoader } from '../../redux/loadersSlice';
// import { GetAllOrders } from '../../apicalls/products';
// import { toast } from 'react-toastify';
// import moment from 'moment';

// function Orders({ showOrdersModel, setShowOrdersModel, selectedProduct }) {
//     const [ordersData, setOrdersData] = React.useState([]);
//     const dispatch = useDispatch();

//     // Fetch orders data for the selected product
//     const getData = async () => {
//         try {
//             dispatch(SetLoader(true));
//             const response = await GetAllOrders({
//                 product: selectedProduct._id, // Ensure the selectedProduct ID is passed
//             });
//             dispatch(SetLoader(false));
//             if (response.success) {
//                 setOrdersData(response.data);
//             } else {
//                 toast.error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetLoader(false));
//             toast.error(error.message);
//         }
//     };

//     React.useEffect(() => {
//         if (selectedProduct) {
//             getData();
//         }
//     }, [selectedProduct]);

//     const columns = [
//         { title: 'Name', dataIndex: 'buyer', render: (text, record) => record.buyer?.name },
//         { title: 'Quantity', dataIndex: 'quantity' },
//         {
//             title: 'Price',
//             dataIndex: 'product',
//             render: (text, record) => record.product?.price ? `$${record.product.price}` : 'N/A', 
//         },
//         {
//             title: 'Total Price',
//             dataIndex: 'totalPrice',
//             render: (text, record) => `$${record.totalPrice}`, 
//         },  
        
        
//         {
//             title: 'Order Date',
//             dataIndex: 'createdAt',
//             render: (text) => moment(text).format('MMMM DD YYYY, h:mm:ss A'),
//         },
//         { title: 'Note', dataIndex: 'notes' }, // Note: Changed 'note' to 'notes' to match the schema
//         {
//             title: 'Contact Details',
//             dataIndex: 'contactDetails',
//             render: (text, record) => (
//                 <div>
//                     <p>Phone: {record.phoneNumber}</p>
//                     <p>Email: {record.buyer?.email}</p>
//                 </div>
//             ),
//         },
//         { title: 'Address', dataIndex: 'address' }, // Added Address column
//     ];

//     return (
//         <Modal
//             title="Orders"
//             open={showOrdersModel}
//             onCancel={() => setShowOrdersModel(false)}
//             centered
//             width={1500}
//             footer={null}
//         >
//             <Divider />
//             <h1 className="text-xl text-gray-500">
//                 Product Name: {selectedProduct?.name}
//             </h1>
//             <Table
//                 columns={columns}
//                 dataSource={ordersData}
//                 rowKey="_id"
//                 pagination={false}
//             />
//         </Modal>
//     );
// }

// export default Orders;
import { Divider, Modal, Table } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SetLoader } from '../../redux/loadersSlice';
import { GetAllOrders } from '../../apicalls/products';
import { toast } from 'react-toastify';
import moment from 'moment';

function Orders({ showOrdersModel, setShowOrdersModel, selectedProduct }) {
    const [ordersData, setOrdersData] = React.useState([]);
    const dispatch = useDispatch();

    // Fetch orders data for the selected product
    const getData = async () => {
        try {
            dispatch(SetLoader(true));
            const response = await GetAllOrders({
                product: selectedProduct._id, // Ensure the selectedProduct ID is passed
            });
            dispatch(SetLoader(false));
            if (response.success) {
                setOrdersData(response.data);
            } else {
                toast.error(response.message, { autoClose: 3000 }); // Ensure toast closes after 3 seconds
            }
        } catch (error) {
            dispatch(SetLoader(false));
            toast.error(error.message || 'حدث خطأ أثناء جلب الطلبات.', { autoClose: 3000 });
        }
    };

    React.useEffect(() => {
        if (selectedProduct) {
            getData();
        }
    }, [selectedProduct]);

    const columns = [
        { title: 'الاسم', dataIndex: 'buyer', render: (text, record) => record.buyer?.name },
        { title: 'الكمية', dataIndex: 'quantity' },
        {
            title: 'السعر',
            dataIndex: 'product',
            render: (text, record) => record.product?.price ? `$${record.product.price}` : 'غير متوفر',
        },
        {
            title: 'إجمالي السعر',
            dataIndex: 'totalPrice',
            render: (text, record) => `$${record.totalPrice}`,
        },
        {
            title: 'تاريخ الطلب',
            dataIndex: 'createdAt',
            render: (text) => moment(text).format('MMMM DD YYYY, h:mm:ss A'), // Arabic format can be adjusted if required
        },
        { title: 'ملاحظات', dataIndex: 'notes' },
        {
            title: 'تفاصيل الاتصال',
            dataIndex: 'contactDetails',
            render: (text, record) => (
                <div>
                    <p>الهاتف: {record.phoneNumber}</p>
                    <p>البريد الإلكتروني: {record.buyer?.email}</p>
                </div>
            ),
        },
        { title: 'العنوان', dataIndex: 'address' },
    ];

    return (
        <Modal
            title="الطلبات"
            open={showOrdersModel}
            onCancel={() => setShowOrdersModel(false)}
            centered
            width={1500}
            footer={null}
        >
            <Divider />
            <h1 className="text-xl text-gray-500">
                اسم المنتج: {selectedProduct?.name}
            </h1>
            <Table
                columns={columns}
                dataSource={ordersData}
                rowKey="_id"
                pagination={false}
            />
        </Modal>
    );
}

export default Orders;
