import mongoose, { Schema, Model, Document } from 'mongoose';

type EnergyDocument = Document & {
  description: string | null;
  added: string | null;
  country: string | null;
  insight: string | null;
  intensity: string | null;
  likelihood: string | null;
  pestle: string | null;
  published: string | null;
  region: string | null;
  sector: string | null;
  source: string | null;
  title: string | null;
  topic: string | null;
  relevance: string | null;
  url: string | null;
};

type EnergyInput = {
  description: EnergyDocument['description'];
  added: EnergyDocument['added'];
  country: EnergyDocument['country'];
  insight: EnergyDocument['insight'];
  intensity: EnergyDocument['intensity'];
  likelihood: EnergyDocument['likelihood'];
  pestle: EnergyDocument['pestle'];
  published: EnergyDocument['published'];
  region: EnergyDocument['region'];
  sector: EnergyDocument['sector'];
  source: EnergyDocument['source'];
  title: EnergyDocument['title'];
  topic: EnergyDocument['topic'];
  url: EnergyDocument['url'];
  relevance: EnergyDocument['relevance'];
};

const energySchema = new Schema(
  {
    description: {
      type: Schema.Types.String,
      default: null,
    },
    country: {
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
