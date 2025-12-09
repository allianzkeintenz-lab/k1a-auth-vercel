export default function LoginPage() {
  const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
  const redirectUri = "http://localhost:3000/auth/callback";

  // Mensaje de ayuda si falta alguna variable:
  if (!domain || !clientId) {
    return (
      <div style={{ padding: 40 }}>
        <p>Faltan variables de entorno de Cognito.</p>
      </div>
    );
  }

  const loginUrl =
    `${domain}/login?response_type=code&client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}`;

  return (
    <div style={{ padding: 40 }}>
      <a href={loginUrl}>Entrar con Cognito</a>
    </div>
  );
}

