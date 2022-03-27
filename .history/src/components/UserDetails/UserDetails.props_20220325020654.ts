import { RouteComponentProps } from 'react-router';

interface MatchParams {
  name: string;
}

export interface UserDetailsProps extends RouteComponentProps<MatchParams> {}
