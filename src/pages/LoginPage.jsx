import AuthForm from '../components/AuthForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  )
}
