export interface Task {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Completed';
  type: 'Bug' | 'Feature' | 'Document';
  assignee: string;
  dueDate: string;
}

export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isUrgent: boolean;
  mentions: string[];
  type: 'private' | 'group';
}

export interface Notification {
  id: string;
  type: 'Mention' | 'Meeting' | 'Deadline' | 'Update';
  content: string;
  timestamp: string;
  isRead: boolean;
}