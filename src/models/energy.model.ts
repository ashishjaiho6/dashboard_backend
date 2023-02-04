import mongoose, { Schema, Model, Document } from 'mongoose';

type EnergyDocument = Document & {
  topic: string;
  description: string | null;
};

type EnergyInput = {
  topic: EnergyDocument['topic'];
  description: EnergyDocument['description'];
};

const energySchema = new Schema(
  {
    topic: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.String,
      default: null,
    },
  },
  {
    collection: 'data',
    timestamps: true,
  },
);

const Energy: Model<EnergyDocument> = mongoose.model<EnergyDocument>('Energy', energySchema);

export { Energy, EnergyInput, EnergyDocument };
