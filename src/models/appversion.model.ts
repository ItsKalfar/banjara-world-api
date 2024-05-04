import { Schema, Document, model } from 'mongoose';

interface AppVersionDocument extends Document {
  versionNumber: string;
  releaseDate: Date;
}

const AppVersionSchema: Schema<AppVersionDocument> = new Schema({
  versionNumber: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

export const AppVersion = model<AppVersionDocument>('AppVersion', AppVersionSchema);
