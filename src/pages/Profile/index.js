// // import React from 'react'
// // import { Tabs } from 'antd'
// // import Products from "./Products"
// // function Profile() {
// //   return (
// //     <div>
// //       <Tabs defaultActiveKey='1'>
// //         <Tabs.TabPane tab="Products" key='1'>
// //           <Products /></Tabs.TabPane>
// //         <Tabs.TabPane tab="Bids" key='2'><h1>Bids</h1></Tabs.TabPane>
// //         <Tabs.TabPane tab="General" key="3">
// //           <h1>General</h1>
// //         </Tabs.TabPane>
// //       </Tabs>
// //     </div>
// //   )
// // }

// // export default Profile
// import React from 'react';
// import { Tabs } from 'antd';
// import Products from "../Products"; // Ensure that you have this component imported properly

// function Profile() {
//   return (

//     <div style={{ padding: '20px' }}>
//       <Tabs defaultActiveKey="1" centered>
//         {/* Products Tab */}
//         <Tabs.TabPane tab="Products" key="1">
//           <Products />
//         </Tabs.TabPane>

//         {/* Bids Tab */}
//         <Tabs.TabPane tab="Orders" key="2">
//           <h1>orders</h1>
//           {/* Add content or functionality for the "Bids" tab here */}
//         </Tabs.TabPane>

//         {/* General Tab */}
//         <Tabs.TabPane tab="General" key="3">
//           <h1>General</h1>
//           {/* Add general content or settings */}
//         </Tabs.TabPane>
//       </Tabs>
//     </div>
//   );
// }

// export default Profile;
// تصدير افتراضي لملف البروفايل
import React from 'react';
import { Tabs } from 'antd';
import Products from "../Products"; // تأكد من استيراد هذا المكون بشكل صحيح
import Orders from "../Profile/UserOrders"
function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs defaultActiveKey="1" centered>
        {/* علامة تبويب المنتجات */}
        <Tabs.TabPane tab="المنتجات" key="1">
          <Products />
        </Tabs.TabPane>

        {/* علامة تبويب الطلبات */}
        <Tabs.TabPane tab="الطلبات" key="2">
          <Orders />
          {/* يمكنك إضافة محتوى أو وظائف لعلامة التبويب "الطلبات" هنا */}
        </Tabs.TabPane>

        {/* علامة تبويب عام */}
        <Tabs.TabPane tab="عام" key="3">
          <h1>عام</h1>
          {/* يمكنك إضافة محتوى أو إعدادات عامة هنا */}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
