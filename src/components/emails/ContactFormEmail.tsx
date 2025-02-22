import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Tailwind,
} from '@react-email/components'

interface ContactFormEmailProps {
  name: string
}

export const ContactFormEmail = ({ name }: ContactFormEmailProps) => {
  return (
    <Html>
      <Preview>Thank you for contacting us!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container className="py-8 px-4">
            <Text className="text-2xl font-bold mb-4">
              Hello {name}!
            </Text>
            <Text className="mb-4">
              Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
            </Text>
            <Text className="mb-4">
              In the meantime, feel free to check out our website for more information.
            </Text>
            <Text className="text-gray-500 text-sm">
              Best regards,
              Your Company Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
} 