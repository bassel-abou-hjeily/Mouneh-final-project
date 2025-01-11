import { Divider, Modal, Table } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetLoader } from '../../../redux/loadersSlice';
import { toast } from 'react-toastify';
import moment from 'moment';
import { GetAllOrders } from '../../../apicalls/products';

function Orders({ showOrdersModel, setShowOrdersModel, selectedProduct }) {
    const [ordersData, setOrdersData] = React.useState([]);
    const dispatch = useDispatch();
const {user} = useSelector((state) => state.users)
    // Fetch orders data for the selected product
    const getData = async () => {
        try {
            dispatch(SetLoader(true));
            const response = await GetAllOrders({
                buyer: user._id, // Ensure the selectedProduct ID is passed
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
        
            getData();
        }
    , []);

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
        <div className='flex gap-3 flex-col'>
            <h1>My Orders</h1>
            <Table
                columns={columns}
                dataSource={ordersData}
                rowKey="_id"
                pagination={false}
            />
        </div>
    );
}

export default Orders;
