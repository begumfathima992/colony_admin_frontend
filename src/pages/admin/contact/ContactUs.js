import React, { useState } from 'react';
import { 
    Box, TextField, Button, Typography, Container, 
    Paper, Stack, CircularProgress 
} from '@mui/material';
import { IoSend, IoMail } from "react-icons/io5";
import { contactUs } from "../../../service/reservationService";

const ContactUs = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [userType] = useState('User'); 
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

   const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoader(true);

        const payload = { ...formData, userType };

        try {
            const response = await contactUs(payload);
            
            // LOG THIS to see exactly what your API returns
            console.log("Full API Response:", response);

            // Logic to check for success
            // Some services return the raw JSON, others wrap it in { data: ... }
            const result = response?.data || response; 

            if (result?.success === true || result?.statusCode === 200) {
                // Use the message from the backend directly
                alert(result.message || "Message sent successfully!");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                // This triggers if success is false even if status is 200
                alert(result?.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Connection Error:", error);
            alert("Something went wrong with the server connection.");
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

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required />
                            <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                            <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                            <TextField fullWidth label="How can we help?" name="message" multiline rows={4} value={formData.message} onChange={handleInputChange} required />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={isLoader}
                                startIcon={isLoader ? <CircularProgress size={20} color="inherit" /> : <IoSend />}
                                sx={{ py: 1.5, textTransform: 'none', borderRadius: 2 }}
                            >
                                {isLoader ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Stack>
                    </form>

                    <Box sx={{ pt: 2, borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'center' }}>
                        <Box display="flex" alignItems="center" gap={1}>
                            <IoMail color="#666" />
                            <Typography variant="body2" color="text.secondary">support.paprikaventures@gmail.com</Typography>
                        </Box>
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
};

export default ContactUs;