import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should render and display the elements correctly', () => {
    render(<App />);

    const inputElementName = screen.getByLabelText(/name/i);
    expect(inputElementName).toBeInTheDocument();

    const inputElementEmail = screen.getByLabelText(/email/i);
    expect(inputElementEmail).toBeInTheDocument();

    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });
  it('should handle the user interaction properly', () => {
    render(<App />);
    const inputElementName = screen.getByLabelText(/name/i);
    const inputElementEmail = screen.getByLabelText(/email/i);
    const buttonElement = screen.getByText(/submit/i);

    userEvent.type(inputElementName, 'Javascript Programmer');
    userEvent.type(inputElementEmail, 'javascript@gmail.com');

    expect(buttonElement).toBeEnabled();
  });
  it('should clear input fields when form is submitted, and button should be disabled', () => {
    render(<App />);
    const inputElementName = screen.getByLabelText(/name/i);
    const inputElementEmail = screen.getByLabelText(/email/i);
    const buttonElement = screen.getByText(/submit/i);

    userEvent.type(inputElementName, 'Javascript Programmer');
    expect(inputElementName).toHaveValue('Javascript Programmer');
    expect(buttonElement).toBeDisabled();

    userEvent.type(inputElementEmail, 'javascript@gmail.com');
    expect(inputElementEmail).toHaveValue('javascript@gmail.com');
    expect(buttonElement).toBeEnabled();

    userEvent.click(buttonElement);

    expect(inputElementName).toHaveValue('');
    expect(inputElementEmail).toHaveValue('');
    expect(buttonElement).toBeDisabled();
  });
});
