import { BrowserRouter as RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  name: string;
}

export interface UserDetailsProps extends RouteComponentProps<MatchParams> {}
