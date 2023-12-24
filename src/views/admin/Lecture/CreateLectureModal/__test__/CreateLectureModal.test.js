import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import CreateLectureModal from "..";

describe('CreateLectureModal', () => {
    test('render form properly', () => {
        render(<CreateLectureModal />);
    
        const titleLabel = screen.getByText(/Tiêu đề/i);
        const descriptionLabel = screen.getByText(/Mô tả/i);
        const uploadLabel = screen.getByText(/Tải video lên Youtube/i);
        const tagsLabel = screen.getByText(/Tags/i);
    
        expect(titleLabel).toBeInTheDocument();
        expect(descriptionLabel).toBeInTheDocument();
        expect(uploadLabel).toBeInTheDocument();
        expect(tagsLabel).toBeInTheDocument();
    });
    
    test('title should not be empty', () => {
        render(<CreateLectureModal />);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const uploadLabel = screen.getByLabelText(/Tải video lên Youtube/i);
        const tagsLabel = screen.getByLabelText(/Tags/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
          });

        fireEvent.change(titleLabel, { target: { value: '' }} );
        fireEvent.change(descriptionLabel, { target: { value: 'Test description' }} );
        fireEvent.change(uploadLabel, { target: { value: '4OCZdlJyDHA' }} );
        fireEvent.change(tagsLabel, { target: { value: 'Testing tags' }} );

        fireEvent.click(submitBtn);
        expect(errorElement).toHaveTextContent('Tiêu đề là trường bắt buộc !')
    });

    test('description should not be empty', async () => {
        render(<CreateLectureModal />);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const uploadLabel = screen.getByLabelText(/Tải video lên Youtube/i);
        const tagsLabel = screen.getByLabelText(/Tags/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
          });

        // eslint-disable-next-line testing-library/no-unnecessary-act
        fireEvent.change(titleLabel, { target: { value: 'Test title' }} );
        fireEvent.change(descriptionLabel, { target: { value: '' }} );
        fireEvent.change(uploadLabel, { target: { value: '4OCZdlJyDHA' }} );
        fireEvent.change(tagsLabel, { target: { value: 'Testing tags' }} );
        fireEvent.click(submitBtn);
        expect(errorElement).toHaveTextContent('Mô tả là trường bắt buộc !')
    })

    test('video should not be empty', () => {
        render(<CreateLectureModal />);
        const titleLabel = screen.getByLabelText(/Tiêu đề/i);
        const descriptionLabel = screen.getByLabelText(/Mô tả/i);
        const uploadLabel = screen.getByLabelText(/Tải video lên Youtube/i);
        const tagsLabel = screen.getByLabelText(/Tags/i);
        const submitBtn = screen.getByText(/Thêm/i);
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
          });

        fireEvent.change(titleLabel, { target: { value: 'Test title' }} );
        fireEvent.change(descriptionLabel, { target: { value: 'Test description' }} );
        fireEvent.change(uploadLabel, { target: { value: '' }} );
        fireEvent.change(tagsLabel, { target: { value: 'Testing tags' }} );

        fireEvent.click(submitBtn);
        expect(errorElement).toHaveTextContent('Video là trường bắt buộc !')
    })
})