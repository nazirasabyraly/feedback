import { useState } from 'react'
import { Container, Stack, Heading } from '@chakra-ui/react'
import { type Feedback } from './types/feedback'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'

function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  const handleSubmit = (text: string) => {
    const newFeedback: Feedback = {
      id: crypto.randomUUID(),
      text,
      votes: 0,
      createdAt: new Date(),
    }
    setFeedbacks((prev) => [...prev, newFeedback])
  }

  const handleDelete = (id: string) => {
    setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id))
  }

  return (
    <Container maxW="container.md" py={8}>
      <Stack direction="column" gap={8} width="100%">
        <Heading>Product Feedback Board</Heading>
        <FeedbackForm onSubmit={handleSubmit} />
        <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
      </Stack>
    </Container>
  )
}

export default App
