import React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateCourseModal from "../../CreateCourseModal";

describe('CreateCourseModal', () => {
    let file;
    beforeEach(() => {
        file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    });
    test('render form properly', () => {
        render(<CreateCourseModal />);
    
        const nameLabel = screen.getByText(/Tên khóa học/i);
        const titleLabel = screen.getByText(/Tiêu đề/i);
        const descriptionLabel = screen.getByText(/Mô tả/i);
        const imageLabel = screen.getByText(/Hình ảnh/i);
        const demandsLabel = screen.getByText(/Yêu cầu/i);
    
        expect(nameLabel).toBeInTheDocument();
        expect(titleLabel).toBeInTheDocument();
        expect(descriptionLabel).toBeInTheDocument();
        expect(imageLabel).toBeInTheDocument();
        expect(demandsLabel).toBeInTheDocument();
    });
    
    test('name should not be empty', async () => {
        render(<CreateCourseModal />);
        const nameLabel = screen.getByLabelText(/Tên khóa học/i);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const imageLabel = screen.getByLabelText(/Hình ảnh/i);
        const demandsLabel = screen.getByLabelText(/Yêu cầu/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
        });
        fireEvent.change(nameLabel, { target: { value: '' }} );
            fireEvent.change(titleLabel, { target: { value: 'Tên khóa học' }} );
            fireEvent.change(descriptionLabel, { target: { value: 'Mô tả' }} );
            fireEvent.change(imageLabel, { target: { value: '' }} );
            fireEvent.change(demandsLabel, { target: { value: 'Yêu cầu' }} );

        fireEvent.click(submitBtn);
        await waitFor(() => expect(errorElement).toHaveTextContent('Tên khóa học là trường bắt buộc !'));
    });

    test('title should not be empty', async () => {
        render(<CreateCourseModal />);
        const nameLabel = screen.getByLabelText(/Tên khóa học/i);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const imageLabel = screen.getByLabelText(/Hình ảnh/i);
        const demandsLabel = screen.getByLabelText(/Yêu cầu/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
          });

        fireEvent.change(nameLabel, { target: { value: 'Tên khóa học' }} );
        fireEvent.change(titleLabel, { target: { value: '' }} );
        fireEvent.change(descriptionLabel, { target: { value: 'Mô tả' }} );
        fireEvent.change(imageLabel, { target: { value: '' }} );
        fireEvent.change(demandsLabel, { target: { value: 'Yêu cầu' }} );

        fireEvent.click(submitBtn);
        await waitFor(() => expect(errorElement).toHaveTextContent('Tiêu đề là trường bắt buộc !'));
    });

    test('description should not be empty', async () => {
        render(<CreateCourseModal />);
        const nameLabel = screen.getByLabelText(/Tên khóa học/i);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const imageLabel = screen.getByLabelText(/Hình ảnh/i);
        const demandsLabel = screen.getByLabelText(/Yêu cầu/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
          });

        fireEvent.change(nameLabel, { target: { value: 'Tên khóa học' }} );
        fireEvent.change(titleLabel, { target: { value: 'Tiêu đề' }} );
        fireEvent.change(descriptionLabel, { target: { value: '' }} );
        fireEvent.change(imageLabel, { target: { value: '' }} );
        fireEvent.change(demandsLabel, { target: { value: 'Yêu cầu' }} );

        fireEvent.click(submitBtn);
        await waitFor(() => expect(errorElement).toHaveTextContent('Mô tả là trường bắt buộc !'))
    });

    test('image should not be empty', () => {
        render(<CreateCourseModal />);
        const nameLabel = screen.getByLabelText(/Tên khóa học/i);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const imageLabel = screen.getByLabelText(/Hình ảnh/i);
        const demandsLabel = screen.getByLabelText(/Yêu cầu/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
          });

        fireEvent.change(nameLabel, { target: { value: 'Tên khóa học' }} );
        fireEvent.change(titleLabel, { target: { value: 'Tiêu đề' }} );
        fireEvent.change(descriptionLabel, { target: { value: 'Mô tả' }} );
        fireEvent.change(imageLabel, { target: { value: null }} );
        fireEvent.change(demandsLabel, { target: { value: 'Yêu cầu' }} );

        fireEvent.click(submitBtn);
        expect(errorElement).toHaveTextContent('Ảnh thumbnail là trường bắt buộc !')
    });
})