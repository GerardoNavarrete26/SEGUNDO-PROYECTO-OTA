import mongoose from 'mongoose'; // Asegúrate de que sea mongoose correctamente escrito

// Connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ProyectoOTA');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};