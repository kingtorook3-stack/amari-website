import './globals.css'

export const metadata = {
  title: 'Amari AI | Data Sovereignty Platform',
  description: 'Secure, auditable, user-controlled data sharing. Privacy-first infrastructure for enterprise AI.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
