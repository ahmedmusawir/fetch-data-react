import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';

function PostForm() {
  //   FORMIK INFO
  const initialValues = {
    title: '',
    body: '',
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });
    // const bookObj = { id: uuid(), ...values };
    // addBook([...data, bookObj]);
    // dispatch({ type: 'ADD_BOOK', book: bookObj });
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is Required!'),
    body: Yup.string().required('Content is Required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className='p-3 bg-light formik-comp'>
          {/* BOOK TITLE */}
          <div className='mb-2'>
            <FormikControl
              control='input'
              type='text'
              name='title'
              label='Post Title'
              placeholder='Title of the Post'
              className={
                formik.touched.title && formik.errors.title
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
          </div>

          {/* TEXT AREA */}
          <div className='mb-3'>
            <FormikControl
              control='textarea'
              name='body'
              label='Post Content'
              placeholder='Content'
              rows={4}
              className={
                formik.touched.body && formik.errors.body
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
          </div>
          <hr className='bg-primary' />
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
          <button className='btn btn-warning ml-1' type='reset'>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
}

PostForm.propTypes = {};

export default PostForm;
