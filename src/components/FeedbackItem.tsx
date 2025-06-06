import { Box, Text, Button, HStack } from '@chakra-ui/react';
import { type Feedback } from '../types/feedback';

interface FeedbackItemProps {
  feedback: Feedback;
  onDelete: (id: string) => void;
}

export const FeedbackItem = ({ feedback, onDelete }: FeedbackItemProps) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      width="100%"
      position="relative"
    >
      <HStack justify="space-between">
        <Text>{feedback.text}</Text>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onDelete(feedback.id)}
        >
          🗑️
        </Button>
      </HStack>
    </Box>
  );
}; 