export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}
export interface UserSettings {
    defaultModel: string;
    theme: 'dark' | 'light';
}
