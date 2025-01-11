// // // // import { Button, Upload } from 'antd'
// // // // import React from 'react'

// // // // function Images(
// // // //     selectedProduct,
// // // //     setSelectedProduct,
// // // //     setShowProductForm,
// // // //     getData,
// // // // ) {
// // // //     const [file = null, setFile] = React.useState(null);
// // // //     const upload = () => {
// // // //         console.log(file);
// // // //     }
// // // //     return (
// // // //         <div>
// // // //             <Upload
// // // //                 listType='picture'
// // // //                 beforeUpload={() => false}
// // // //                 onChange={(info) => {
// // // //                     setFile(info.file);
// // // //                 }}><Button type="default">Upload Image</Button></Upload>
// // // //             <div className="flex justify-end gap-5 mt-5">
// // // //                 <Button type='primary' onClick={() => {
// // // //                     setShowProductForm(false);
// // // //                 }}>Cancel</Button>
// // // //                 <Button type="primary" disabled={!file} onClick={upload}>
// // // // Upload
// // // //                 </Button>
// // // //             </div>
// // // //         </div>
// // // //     )
// // // // }

// // // // export default Images
// // // import { Button, message, Upload } from 'antd';
// // // import React, { useState } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { SetLoader } from '../../redux/loadersSlice';
// // // import { toast } from 'react-toastify';

// // // function Images({ selectedProduct, setSelectedProduct, setShowProductForm, getData }) {
// // //     const { images: { }, detImages } = React.useState([selectedProduct.images]);
// // //     const [file, setFile] = useState(null); // Use state to store the uploaded file
// // //     const dispatch = useDispatch();

// // //     const upload = async () => {
// // //         try {
// // //             dispatch(SetLoader(true));
// // //             //upload to base64 and database
// // //             const formData = new FormData();
// // //             formData.append("file", file);
// // //             formData.append("productId", selectedProduct._id);
// // //             const response = await uploadProductImage(formData);
// // //             dispatch(SetLoader(false));
// // //             if (response.success) {
// // //                 toast.success(response.message);
// // //                 setImages([...Images,response.data])
// // //                 getData();
// // //             } else {
// // //                 message.error(response.message)
// // //             }

// // //         }
// // //         catch (error) {
// // //             dispatch(SetLoader(false));
// // //             toast.error(error.message)
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <Upload
// // //                 listType="picture"
// // //                 beforeUpload={() => false} // Prevent automatic upload
// // //                 onChange={(info) => setFile(info.file)} // Store file when it's selected
// // //            previewFile={()=>false}
// // //             >
// // //                 <div className='flex gap-5 mb-5'>{images.map((image) => {
// // //                     return <div className='flex gap-2 border border-solid border-gray-500 p-5 items-end'><img  className="h-20 w-20 object-cover" src={image} alt="" />       <i
// // //                     className="ri-pencil-line"
// // //                     style={{ cursor: 'pointer' }}
// // //                     onClick={() => {

// // //                     }}
// // //                   /></div>
// // //             })}</div>
// // //                 <Button type="default">Upload Image</Button>
// // //             </Upload>

// // //             <div className="flex justify-end gap-5 mt-5">
// // //                 <Button
// // //                     type="primary"
// // //                     onClick={() => setShowProductForm(false)} // Cancel button functionality
// // //                 >
// // //                     Cancel
// // //                 </Button>

// // //                 <Button
// // //                     type="primary"
// // //                     disabled={!file} // Disable upload button if no file is selected
// // //                     onClick={upload} // Trigger the upload function when clicked
// // //                 >
// // //                     Upload
// // //                 </Button>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // import { Button, message, Upload } from 'antd';
// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { SetLoader } from '../../redux/loadersSlice';
// // import { toast } from 'react-toastify';
// // import { uploadProductImage } from '../../apicalls/products';

// // function Images({ selectedProduct, setSelectedProduct, setShowProductForm, getData }) {
// //     const [showPreview, setShowPreview] = useState(false); // Correct initialization of state
// //     const [images, setImages] = useState(selectedProduct.images || []); // Initialize with existing images
// //     const [file, setFile] = useState(null); // Use state to store the uploaded file
// //     const dispatch = useDispatch();

// //     const upload = async () => {
// //         try {
// //             dispatch(SetLoader(true));
// //             // Prepare FormData for upload
// //             const formData = new FormData();
// //             formData.append("file", file);
// //             formData.append("productId", selectedProduct._id);

// //             const response = await uploadProductImage(formData);
// //             dispatch(SetLoader(false));

// //             if (response.success) {
// //                 toast.success(response.message);
// //                 setImages([...images, response.data]);
// //                 setShowPreview(false);
// //                 setFile(null); // Clear the file after upload
// //                 getData(); // Refresh product data
// //             } else {
// //                 message.error(response.message);
// //             }
// //         } catch (error) {
// //             dispatch(SetLoader(false));
// //             toast.error(error.message);
// //         }
// //     };

// //     return (
// //         <div>
// //             <Upload
// //                 listType="picture"
// //                 beforeUpload={() => false} // Prevent automatic upload
// //                 onChange={(info) => {
// //                     setFile(info.file);
// //                     setShowPreview(true);
// //                 }} // Store file when selected
// //                 showUploadList={showPreview}
// //             >
// //                 <Button type="default">Select Image</Button>
// //             </Upload>

// //             <div className="flex gap-5 mb-5">
// //                 {images.map((image, index) => (
// //                     <div
// //                         key={index}
// //                         className="flex gap-2 border border-solid border-gray-500 p-5 items-end"
// //                     >
// //                         <img
// //                             className="h-20 w-20 object-cover"
// //                             src={image}
// //                             alt={`Uploaded ${index}`}
// //                         />
// //                         <i
// //                             className="ri-delete-line"
// //                             style={{ cursor: 'pointer' }}
// //                             onClick={() => {
// //                                 // Implement edit functionality if required
// //                             }}
// //                         />
// //                     </div>
// //                 ))}
// //             </div>

// //             <div className="flex justify-end gap-5 mt-5">
// //                 <Button
// //                     type="primary"
// //                     onClick={() => setShowProductForm(false)} // Cancel button functionality
// //                 >
// //                     Cancel
// //                 </Button>

// //                 <Button
// //                     type="primary"
// //                     disabled={!file} // Disable upload button if no file is selected
// //                     onClick={upload} // Trigger the upload function
// //                 >
// //                     Upload
// //                 </Button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Images;
// // /*import { Button, message, Upload } from 'antd';
// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { SetLoader } from '../../redux/loadersSlice';
// // import { toast } from 'react-toastify';
// // import { EditProduct, uploadProductImage } from '../../apicalls/products';

// // function Images({ selectedProduct, setSelectedProduct, setShowProductForm, getData }) {
// //     const [showPreview, setShowPreview] = useState(false); // Correct initialization of state
// //     const [images, setImages] = useState(selectedProduct.images || []); // Initialize with existing images
// //     const [file, setFile] = useState(null); // Use state to store the uploaded file
// //     const dispatch = useDispatch();

// //     const upload = async () => {
// //         try {
// //             dispatch(SetLoader(true));
// //             // Prepare FormData for upload
// //             const formData = new FormData();
// //             formData.append("file", file);
// //             formData.append("productId", selectedProduct._id);

// //             const response = await uploadProductImage(formData);
// //             dispatch(SetLoader(false));

// //             if (response.success) {
// //                 toast.success(response.message);
// //                 setImages([...images, response.data]);
// //                 setShowPreview(false);
// //                 setFile(null); // Clear the file after upload
// //                 getData(); // Refresh product data
// //             } else {
// //                 message.error(response.message);
// //             }
// //         } catch (error) {
// //             dispatch(SetLoader(false));
// //             toast.error(error.message);
// //         }
// //     };
// //     const deleteImage = async (image) => {
// //         try {
// //             const updatedImagesArray = images.filter((img) => img !== image);
// //             const updatedProduct = { ...selectedProduct, images: updatedImagesArray };
// //             const response = await EditProduct(
// //                 selectedProduct._id,
// //                 updatedProduct);
// //             if (response.success) {
// //                 message.success(response.message);
// //                 setImages(updatedImagesArray);
// //                 getData();
// //             } else {
// //                 throw new Error(response.message);
// //             }
// //             dispatch(SetLoader(true));
// //         } catch (error) {
// //             dispatch(SetLoader(false));
// //             toast.error(error.message);
// //         }
// //     };
// //     return (
// //         <div>
// //             <Upload
// //                 listType="picture"
// //                 beforeUpload={() => false} // Prevent automatic upload
// //                 onChange={(info) => {
// //                     setFile(info.file);
// //                     setShowPreview(true);
// //                 }} // Store file when selected
// //                 showUploadList={showPreview}
// //             >
// //                 <Button type="default">Select Image</Button>
// //             </Upload>

// //             <div className="flex gap-5 mb-5">
// //                 {images.map((image, index) => (
// //                     <div
// //                         key={index}
// //                         className="flex gap-2 border border-solid border-gray-500 p-5 items-end"
// //                     >
// //                         <img
// //                             className="h-20 w-20 object-cover"
// //                             src={image}
// //                             alt={`Uploaded ${index}`}
// //                         />
// //                         <i
// //                             className="ri-delete-bin-line"
// //                             style={{ cursor: 'pointer' }}
// //                             onClick={() => {
// //                                 deleteImage()
// //                             }}
// //                         ></i>
// //                     </div>
// //                 ))}
// //             </div>

// //             <div className="flex justify-end gap-5 mt-5">
// //                 <Button
// //                     type="primary"
// //                     onClick={() => setShowProductForm(false)} // Cancel button functionality
// //                 >
// //                     Cancel
// //                 </Button>

// //                 <Button
// //                     type="primary"
// //                     disabled={!file} // Disable upload button if no file is selected
// //                     onClick={upload} // Trigger the upload function
// //                 >
// //                     Upload
// //                 </Button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Images;*/
// import { Button, message, Upload } from 'antd';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { SetLoader } from '../../redux/loadersSlice';
// import { toast } from 'react-toastify';
// import { EditProduct, uploadProductImage } from '../../apicalls/products';

// function Images({ selectedProduct, setSelectedProduct, setShowProductForm, getData }) {
//     const [showPreview, setShowPreview] = useState(false);
//     const [images, setImages] = useState(selectedProduct.images || []);
//     const [file, setFile] = useState(null);
//     const dispatch = useDispatch();

//     const upload = async () => {
//         try {
//             dispatch(SetLoader(true));
//             const formData = new FormData();
//             formData.append('file', file);
//             formData.append('productId', selectedProduct._id);

//             const response = await uploadProductImage(formData);
//             dispatch(SetLoader(false));

//             if (response.success) {
//                 toast.success(response.message);
//                 setImages([...images, response.data]);
//                 setShowPreview(false);
//                 setFile(null);
//                 getData();
//             } else {
//                 message.error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetLoader(false));
//             toast.error(error.message);
//         }
//     };

//     const deleteImage = async (image) => {
//         try {
//             dispatch(SetLoader(true));
//             const updatedImagesArray = images.filter((img) => img !== image);
//             const updatedProduct = { ...selectedProduct, images: updatedImagesArray };

//             const response = await EditProduct(selectedProduct._id, updatedProduct);
//             dispatch(SetLoader(false));

//             if (response.success) {
//                 message.success(response.message);
//                 setImages(updatedImagesArray);
//                 getData();
//             } else {
//                 throw new Error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetLoader(false));
//             console.error(error);
//             toast.error(error.message || 'Failed to delete the image');
//         }
//     };

//     return (
//         <div>
//             <Upload
//                 listType="picture"
//                 beforeUpload={() => false}
//                 onChange={(info) => {
//                     setFile(info.file);
//                     setShowPreview(true);
//                 }}
//                 showUploadList={showPreview}
//             >
//                 <Button type="default">Select Image</Button>
//             </Upload>

//             <div className="flex gap-5 mb-5">
//                 {images.map((image, index) => (
//                     <div
//                         key={index}
//                         className="flex gap-2 border border-solid border-gray-500 p-5 items-end"
//                     >
//                         <img
//                             className="h-20 w-20 object-cover"
//                             src={image}
//                             alt={`Uploaded ${index}`}
//                         />
//                         <i
//                             className="ri-delete-bin-line"
//                             style={{ cursor: 'pointer' }}
//                             onClick={() => deleteImage(image)}
//                         ></i>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-end gap-5 mt-5">
//                 <Button type="primary" onClick={() => setShowProductForm(false)}>
//                     Cancel
//                 </Button>
//                 <Button type="primary" disabled={!file} onClick={upload}>
//                     Upload
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default Images;
import { Button, message, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SetLoader } from '../../redux/loadersSlice';
import { toast } from 'react-toastify';
import { EditProduct, uploadProductImage } from '../../apicalls/products';

function Images({ selectedProduct, setSelectedProduct, setShowProductForm, getData }) {
    const [showPreview, setShowPreview] = useState(false);
    const [images, setImages] = useState(selectedProduct.images || []);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const upload = async () => {
        try {
            dispatch(SetLoader(true));
            const formData = new FormData();
            formData.append('file', file);
            formData.append('productId', selectedProduct._id);

            const response = await uploadProductImage(formData);
            dispatch(SetLoader(false));

            if (response.success) {
                toast.success('تم رفع الصورة بنجاح!', {
                    autoClose: 3000, // Auto-close after 3 seconds
                });
                setImages([...images, response.data]);
                setShowPreview(false);
                setFile(null);
                getData();
            } else {
                message.error(response.message || 'فشل في رفع الصورة.');
            }
        } catch (error) {
            dispatch(SetLoader(false));
            toast.error(error.message || 'حدث خطأ أثناء رفع الصورة.', {
                autoClose: 3000, // Auto-close after 3 seconds
            });
        }
    };

    const deleteImage = async (image) => {
        try {
            dispatch(SetLoader(true));
            const updatedImagesArray = images.filter((img) => img !== image);
            const updatedProduct = { ...selectedProduct, images: updatedImagesArray };

            const response = await EditProduct(selectedProduct._id, updatedProduct);
            dispatch(SetLoader(false));

            if (response.success) {
                message.success('تم حذف الصورة بنجاح!');
                setImages(updatedImagesArray);
                getData();
            } else {
                throw new Error(response.message || 'فشل في حذف الصورة.');
            }
        } catch (error) {
            dispatch(SetLoader(false));
            console.error(error);
            toast.error(error.message || 'حدث خطأ أثناء حذف الصورة.', {
                autoClose: 3000, // Auto-close after 3 seconds
            });
        }
    };

    return (
        <div>
            <Upload
                listType="picture"
                beforeUpload={() => false}
                onChange={(info) => {
                    setFile(info.file);
                    setShowPreview(true);
                }}
                fileList={file ? [file] : []}
                showUploadList={showPreview}
            >
                <Button type="default">اختر صورة</Button>
            </Upload>

            <div className="flex gap-5 mb-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex gap-2 border border-solid border-gray-500 p-5 items-end"
                    >
                        <img
                            className="h-20 w-20 object-cover"
                            src={image}
                            alt={`تم تحميل الصورة ${index}`}
                        />
                        <i
                            className="ri-delete-bin-line"
                            style={{ cursor: 'pointer' }}
                            onClick={() => deleteImage(image)}
                        ></i>
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-5 mt-5">
                <Button type="primary" onClick={() => setShowProductForm(false)}>
                    إلغاء
                </Button>
                <Button type="primary" disabled={!file} onClick={upload}>
                    رفع
                </Button>
            </div>
        </div>
    );
}

export default Images;
