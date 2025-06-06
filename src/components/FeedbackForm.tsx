import { useState } from 'react';
import {
  Box,
  Button,
  Textarea,
  Stack,
  FormControl,
} from '@chakra-ui/react';

interface FeedbackFormProps {
  onSubmit: (text: string) => void;
}

export const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <Stack direction="column" gap={4}>
        <FormControl>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your feedback..."
            size="lg"
            resize="vertical"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" disabled={!text.trim()}>
          Submit Feedback
        </Button>
      </Stack>
    </Box>
  );
}; 