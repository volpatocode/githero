import { InputError } from "./styles";

export type errorType = {
  error: any;
};

export default function index({ error }: errorType) {
  return <InputError>{error}</InputError>;
}