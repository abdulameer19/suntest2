import mongoose from "mongoose";
export interface Data extends mongoose.Document {
  YearWeekISO: string;
  ReportingCountry: string;
  Denominator: string;
  NumberDosesReceived: string;
  NumberDosesExported: string;
  FirstDose: string;
  SecondDose: string;
  DoseAdditional1: string;
  DoseAdditional2: string;
  UnknownDose: string;
  Region: string;
  TargetGroup: string;
  Vaccine: string;
  Population: string;
}

export const DataSchema = new mongoose.Schema({
  YearWeekISO: {
    type: String,
  },
  ReportingCountry: {
    type: String,
  },
  Denominator: {
    type: String,
  },
  NumberDosesReceived: {
    type: String,
  },
  NumberDosesExported: {
    type: String,
  },
  FirstDose: {
    type: String,
  },
  SecondDose: {
    type: String,
  },
  DoseAdditional1: {
    type: String,
  },
  DoseAdditional2: {
    type: String,
  },
  UnknownDose: {
    type: String,
  },
  Region: {
    type: String,
  },
  TargetGroup: {
    type: String,
  },
  Vaccine: {
    type: String,
  },
  Population: {
    type: String,
  },
});

const Data = mongoose.model<Data>("Data", DataSchema);
export default Data;
