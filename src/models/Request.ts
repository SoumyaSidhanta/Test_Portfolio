import mongoose, { Schema, Document } from 'mongoose';

export interface IRequest extends Document {
  name: string;
  email: string;
  company: string;
  requirement: string;
  budget: string;
  createdAt: Date;
}

const RequestSchema = new Schema<IRequest>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, default: '' },
  requirement: { type: String, required: true },
  budget: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Request || mongoose.model<IRequest>('Request', RequestSchema);
