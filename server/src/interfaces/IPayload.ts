import IEmptyPayloadData from './IEmptyPayloadData';

export type PayloadData = IEmptyPayloadData;

export default interface IPayload {
	type: string;
	data: PayloadData;
}