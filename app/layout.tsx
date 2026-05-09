import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanjana | Cloud & DevOps Engineer',
  description: 'Portfolio of Sanjana, specializing in AWS, Kubernetes, and Terraform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black">{children}</body>
    </html>
  )
}
