// import { Modal, Button, Form, Input, InputNumber, message } from 'antd';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { PlaceNewOrder } from '../../apicalls/products';
// import { SetLoader } from '../../redux/loadersSlice';
// import { toast } from 'react-toastify';
// import { addNotification } from '../../apicalls/notifications';
// function OrderModel({ showOrderModel, setShowOrderModel, product, reloadData }) {
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(product.price);
//   const [form] = Form.useForm();
//   const { user } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   // Update total price dynamically
//   const handleIncrement = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     setTotalPrice(product.price * newQuantity);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       setQuantity(newQuantity);
//       setTotalPrice(product.price * newQuantity);
//     }
//   };
//   const isFinish = async (values) => {
//     try {
//       dispatch(SetLoader(true));
//       const totalPrice = product.price * quantity; // Calculate total price
//       const response = await PlaceNewOrder({
//         ...values,
//         product: product._id,
//         seller: product.seller._id,
//         buyer: user._id,
//         quantity,
//         totalPrice, // Include totalPrice in the request
//       });
//       dispatch(SetLoader(false));
//       if (response.success) {
//         toast.success("Order added successfully");
//         //send notification  to seller 
//         await addNotification({
//           title: "a new Order has been placed",
//           message: `A new Order has been placed on your product  ${product.name} by ${user.name} for ${quantity}`,
//           onClick: '/profile',
//           read:false
//         })
//         reloadData();
//         setShowOrderModel(false);
//       } else {
//         throw new Error(response.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       dispatch(SetLoader(false));
//     }
//   };


//   return (
//     <Modal
//       title="Place Your Order"
//       visible={showOrderModel}
//       onCancel={() => setShowOrderModel(false)}
//       footer={[
//         <Button key="cancel" onClick={() => setShowOrderModel(false)}>
//           Cancel
//         </Button>,
//         <Button
//           key="place-order"
//           type="primary"
//           onClick={() => form.validateFields().then(isFinish)}
//         >
//           Place Order
//         </Button>,
//       ]}
//       centered
//       width={600}
//     >
//       <div className="flex flex-col gap-4">
//         <Form
//           layout="vertical"
//           form={form}
//           onFinish={isFinish}
//           initialValues={{
//             notes: '',
//             phoneNumber: '',
//             address: '',
//           }}
//         >
//           <Form.Item label="Product Name">
//             <Input value={product.name} disabled />
//           </Form.Item>

//           <Form.Item label="Price">
//             <Input value={`$${product.price}`} disabled />
//           </Form.Item>

//           <Form.Item label="Quantity">
//             <div className="flex items-center gap-2">
//               <Button onClick={handleDecrement}>-</Button>
//               <InputNumber
//                 min={1}
//                 value={quantity}
//                 onChange={(value) => {
//                   setQuantity(value || 1);
//                   setTotalPrice(product.price * (value || 1));
//                 }}
//               />
//               <Button onClick={handleIncrement}>+</Button>
//             </div>
//           </Form.Item>

//           <Form.Item label="Total Price">
//             <Input value={`$${totalPrice.toFixed(2)}`} disabled />
//           </Form.Item>

//           <Form.Item name="notes" label="Special Notes">
//             <Input.TextArea placeholder="Add any special instructions or preferences" />
//           </Form.Item>

//           <Form.Item
//             name="phoneNumber"
//             label="Phone Number"
//             rules={[{ required: true, message: 'Please enter your phone number' }]}
//           >
//             <Input placeholder="Enter your phone number" />
//           </Form.Item>

//           <Form.Item
//             name="address"
//             label="Address"
//             rules={[{ required: true, message: 'Please enter your address' }]}
//           >
//             <Input.TextArea placeholder="Enter your address" />
//           </Form.Item>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// export default OrderModel;
import { Modal, Button, Form, Input, InputNumber, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlaceNewOrder } from '../../apicalls/products';
import { SetLoader } from '../../redux/loadersSlice';
import { toast } from 'react-toastify';
import { AddNotification } from '../../apicalls/notifications';

function OrderModel({ showOrderModel, setShowOrderModel, product, reloadData }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [form] = Form.useForm();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // تحديث السعر الإجمالي ديناميكياً
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(product.price * newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(product.price * newQuantity);
    }
  };

  const isFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      const totalPrice = product.price * quantity; // حساب السعر الإجمالي
      const response = await PlaceNewOrder({
        ...values,
        product: product._id,
        seller: product.seller._id,
        buyer: user._id,
        quantity,
        totalPrice, // تضمين السعر الإجمالي في الطلب
      });
      dispatch(SetLoader(false));

      if (response.success) {
        toast.success("تمت إضافة الطلب بنجاح!"
          , {
            autoClose: 3000, // Auto-close after 3 seconds

            onClose: () => {
              console.log("تم إغلاق إشعار النجاح");
            },
          });

        // إرسال إشعار إلى البائع
        await AddNotification({
          title: "تم تقديم طلب جديد",
          message: `  .  ${quantity} بكمية ${user.name}  بواسطة ${product.name} تم تقديم طلب جديد لمنتجك `,
          user: product.seller._id,
          onClick: `/profile`,
          read: false,
        });

        reloadData();
        setShowOrderModel(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 3000, // Auto-close after 3 seconds

        onClose: () => {
          console.log("تم إغلاق إشعار الخطأ");
        },
      });
      dispatch(SetLoader(false));
    }
  };

  return (
    <Modal
      title="قدم طلبك"
      visible={showOrderModel}
      onCancel={() => setShowOrderModel(false)}
      footer={[
        <Button key="cancel" onClick={() => setShowOrderModel(false)}>
          إلغاء
        </Button>,
        <Button
          key="place-order"
          type="primary"
          onClick={() => form.validateFields().then(isFinish)}
        >
          قدم الطلب
        </Button>,
      ]}
      centered
      width={600}
    >
      <div className="flex flex-col gap-4">
        <Form
          layout="vertical"
          form={form}
          onFinish={isFinish}
          initialValues={{
            notes: '',
            phoneNumber: '',
            address: '',
          }}
        >
          <Form.Item label="اسم المنتج">
            <Input value={product.name} disabled />
          </Form.Item>

          <Form.Item label="السعر">
            <Input value={`$${product.price}`} disabled />
          </Form.Item>

          <Form.Item label="الكمية">
            <div className="flex items-center gap-2">
              <Button onClick={handleDecrement}>-</Button>
              <InputNumber
                min={1}
                value={quantity}
                onChange={(value) => {
                  setQuantity(value || 1);
                  setTotalPrice(product.price * (value || 1));
                }}
              />
              <Button onClick={handleIncrement}>+</Button>
            </div>
          </Form.Item>

          <Form.Item label="السعر الإجمالي">
            <Input value={`$${totalPrice.toFixed(2)}`} disabled />
          </Form.Item>

          <Form.Item name="notes" label="ملاحظات خاصة">
            <Input.TextArea placeholder="أضف أي تعليمات أو تفضيلات خاصة" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="رقم الهاتف"
            rules={[{ required: true, message: 'يرجى إدخال رقم هاتفك' }]}
          >
            <Input placeholder="أدخل رقم هاتفك" />
          </Form.Item>

          <Form.Item
            name="address"
            label="العنوان"
            rules={[{ required: true, message: 'يرجى إدخال عنوانك' }]}
          >
            <Input.TextArea placeholder="أدخل عنوانك" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default OrderModel;
