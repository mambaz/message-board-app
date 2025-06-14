export interface Message {
    id: number;
    name: string;
    message: string;
    timestamp: Date;
}

export interface CreateMessageRequest {
  name: string;
  message: string;
}
