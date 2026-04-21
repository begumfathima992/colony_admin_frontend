import React, { useState } from 'react';
import { 
    Box, 
    TextField, 
    Button, 
    Typography, 
    Container, 
    Paper, 
    Stack, 
    ToggleButton, 
    ToggleButtonGroup,
    CircularProgress 
} from '@mui/material';
import { IoSend, IoMail, IoCall } from "react-icons/io5";
import {contactUs } from "../../../service/reservationService"

const ContactUs = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [userType, setUserType] = useState('User'); // 'User' or 'Developer'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUserType = (event, newType) => {
        if (newType !== null) setUserType(newType);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoader(true);

       const payload = { 
    ...formData, 
    userType: userType // The backend needs 'userType', not 'role'
};

        try {
            // Reference to your API pattern:
            const response = await contactUs(payload);
            
            // Simulating your reference response structure:
            // const response = { statusCode: 200, message: "Success" }; 

            if (response?.statusCode === 200) {
                alert("Thank you! Your message has been sent.");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("API Error:", error);
            alert("Something went wrong.");
        } finally {
            setIsLoader(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Paper elevation={0} sx={{ p: 4, border: '1px solid #e0e0e0', borderRadius: 4 }}>
                <Stack spacing={3}>
                    <Box textAlign="center">
                        <Typography variant="h4" fontWeight="800" gutterBottom>
                            Get in Touch
                        </Typography>
                        <Typography color="text.secondary">
                            Have a question or feedback? We'd love to hear from you.
                        </Typography>
                    </Box>

                    {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Typography variant="caption" fontWeight="bold" color="primary">
                            IDENTIFY YOURSELF
                        </Typography>
                        <ToggleButtonGroup
                            value={userType}
                            exclusive
                            onChange={handleUserType}
                            size="small"
                            color="primary"
                        >
                            <ToggleButton value="User" sx={{ px: 3 }}>Standard User</ToggleButton>
                            <ToggleButton value="Developer" sx={{ px: 3 }}>Apple Developer</ToggleButton>
                        </ToggleButtonGroup>
                    </Box> */}

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="How can we help?"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={isLoader}
                                startIcon={isLoader ? <CircularProgress size={20} color="inherit" /> : <IoSend />}
                                sx={{ 
                                    py: 1.5, 
                                    textTransform: 'none', 
                                    fontSize: '1rem',
                                    borderRadius: 2,
                                    backgroundColor: userType === 'Developer' ? '#2c3e50' : '#1976d2',
                                    '&:hover': {
                                        backgroundColor: userType === 'Developer' ? '#1a252f' : '#115293'
                                    }
                                }}
                            >
                                {isLoader ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Stack>
                    </form>

                    <Box sx={{ pt: 2, borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'center', gap: 4 }}>
                        <Box display="flex" alignItems="center" gap={1}>
                            <IoMail color="#666" />
                            <Typography variant="body2" color="text.secondary">support.paprikaventures@gmail.com</Typography>
                        </Box>
                        {/* <Box display="flex" alignItems="center" gap={1}>
                            <IoCall color="#666" />
                            <Typography variant="body2" color="text.secondary">+1 234 567 890</Typography>
                        </Box> */}
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
};

export default ContactUs;