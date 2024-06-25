import * as React from 'react';
import HistoryTable from './components/HistoryTable';

interface IUserHistoryPageProps {
}

const UserHistoryPage: React.FunctionComponent<IUserHistoryPageProps> = (props) => {
  return <>
  <HistoryTable />
  </>;
};

export default UserHistoryPage;
