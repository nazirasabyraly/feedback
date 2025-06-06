import { Stack } from '@chakra-ui/react';
import { type Feedback } from '../types/feedback';
import { FeedbackItem } from './FeedbackItem';

interface FeedbackListProps {
  feedbacks: Feedback[];
  onDelete: (id: string) => void;
}

export const FeedbackList = ({ feedbacks, onDelete }: FeedbackListProps) => {
  return (
    <Stack direction="column" gap={4} width="100%">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  );
}; 