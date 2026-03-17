import { Container, Logo, UserInput } from './styles';

interface HeaderProps {
  username: string;
  setUsername: (name: string) => void;
}

export function Header({ username, setUsername }: HeaderProps) {
  return (
    <Container>
      <Logo>SafePost</Logo>
      <UserInput
        type="text"
        placeholder="Seu username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </Container>
  );
}
