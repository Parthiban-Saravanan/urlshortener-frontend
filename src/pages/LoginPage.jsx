import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Import Axios instance
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token); // Save token to localStorage
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-primary">
            <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', backgroundColor: '#f8f9fa', color: '#343a40' }}>
                <Card.Body>
                    <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ backgroundColor: '#e9ecef', borderColor: '#007bff' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ backgroundColor: '#e9ecef', borderColor: '#007bff' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                            Login
                        </Button>
                        <Button variant="link" onClick={() => navigate('/forgot-password')} className="mt-2 d-block mx-auto">
                            Forgot Password?
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;
