

export interface Message {
    _id: number;
    _idChat: number;
    text?: string;
    user: number;
    is_audio: boolean;
    name_audio?: string;
    timestap: Date;
}