import { Schema, Document, model } from 'mongoose';

interface MatrimonialProfileDocument extends Document {
    customer: typeof Schema.ObjectId; // Reference to User model
    fatherName: string;
    motherName: string;
    age: number;
    higherEducation: string;
    education: string;
    profession: string;
    city: string;
    state: string;
    currentLocation: string;
    height: string;
    gender: string;
    maritalStatus: string;
    aboutMe: string;
    dateOfBirth: Date;
    birthTime: string;
    religion: string;
    profilePics: string[];
    // Can add preferences
  }

  const MatrimonialProfileSchema: Schema<MatrimonialProfileDocument> = new Schema({
    customer: { type: Schema.ObjectId, ref: 'Customer', required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    age: { type: Number, required: true },
    higherEducation: { type: String, required: true },
    education: { type: String, required: true },
    profession: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    currentLocation: { type: String, required: true },
    height: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    maritalStatus: { type: String, enum: ['Single', 'Divorced', 'Widowed'], required: true },
    aboutMe: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    birthTime: { type: String, required: true },
    religion: { type: String, required: true },
    profilePics: [{ type: String }]
  });

export const MatrimonialProfile = model<MatrimonialProfileDocument>('MatrimonialProfile', MatrimonialProfileSchema);