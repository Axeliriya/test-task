// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: number;
}

export interface UserDetailsProps extends RouteComponentProps<MatchParams> {}
