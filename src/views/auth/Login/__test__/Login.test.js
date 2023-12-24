import React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../Login";

describe('Login', () => {
    test('render form properly', () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        // eslint-disable-next-line testing-library/no-node-access
        document.getElementsByTagName('head')[0].appendChild(script);
        render(<Login />);
    
        const emailLabel = screen.getByText(/Email/i);
        const passwordLabel = screen.getByText(/Mật khẩu/i);
    
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
    });
    
    test('email should not be empty', () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        // eslint-disable-next-line testing-library/no-node-access
        document.getElementsByTagName('head')[0].appendChild(script);
        render(<Login />);
        const emailLabel = screen.getByLabelText(/Email/i);
        const passwordLabel = screen.getByLabelText(/Mật khẩu/i);
        const submitBtn = screen.getByText('Đăng nhập');
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
        });
        fireEvent.change(emailLabel, { target: { value: '' }} );
        fireEvent.change(passwordLabel, { target: { value: 'password' }} );

        fireEvent.click(submitBtn);
        expect(errorElement).toHaveTextContent('')
    });

    test('password should not be empty', async () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        // eslint-disable-next-line testing-library/no-node-access
        document.getElementsByTagName('head')[0].appendChild(script);
        render(<Login />);
        const emailLabel = screen.getByLabelText(/Email/i);
        const passwordLabel = screen.getByLabelText(/Mật khẩu/i);
        const submitBtn = screen.getByText('Đăng nhập');
        const errorElement = screen.getByText((content, element) => {
            // Add a custom condition to match the text content
            // You can customize this condition based on your needs
            return element.id === 'error-text';
        });
        fireEvent.change(emailLabel, { target: { value: 'email@test.com' }} );
        fireEvent.change(passwordLabel, { target: { value: '' }} );

        fireEvent.click(submitBtn);
        await waitFor(() => expect(errorElement).toHaveTextContent(''));
    });
})